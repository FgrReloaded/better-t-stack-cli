import path from "node:path";
import { cancel, confirm, isCancel, log, spinner, tasks } from "@clack/prompts";
import chalk from "chalk";
import degit from "degit";
import { $ } from "execa";
import fs from "fs-extra";
import type { ProjectConfig } from "../types";
import { setupTurso } from "./db-setup";

export async function createProject(options: ProjectConfig) {
	const s = spinner();
	const projectDir = path.resolve(process.cwd(), options.projectName);
	let shouldInstallDeps = false;

	try {
		const tasksList = [
			{
				title: "📁 Creating project directory",
				task: async () => {
					await fs.ensureDir(projectDir);
				},
			},
			{
				title: "📥 Cloning template repository",
				task: async () => {
					try {
						const emitter = degit("better-t-stack/Better-T-Stack#bare", {
							cache: true,
						});
						await emitter.clone(projectDir);
					} catch (error) {
						log.error("Failed to clone template repository");
						if (error instanceof Error) {
							log.error(error.message);
						}
						throw error;
					}
				},
			},
		];

		if (options.git) {
			tasksList.push({
				title: "🗃️ Initializing git repository",
				task: async () => {
					await $({
						cwd: projectDir,
					})`git init`;
				},
			});
		}

		await tasks(tasksList);

		if (options.database === "libsql") {
			await setupTurso(projectDir);
		}

		const installDepsResponse = await confirm({
			message: `📦 Install dependencies with ${options.packageManager}?`,
		});

		if (isCancel(installDepsResponse)) {
			cancel("Operation cancelled");
			process.exit(0);
		}

		shouldInstallDeps = installDepsResponse;

		if (shouldInstallDeps) {
			s.start(`📦 Installing dependencies using ${options.packageManager}...`);
			try {
				await $({
					cwd: projectDir,
				})`${options.packageManager} install`;
				s.stop("✅ Dependencies installed successfully");
			} catch (error) {
				s.stop("Failed to install dependencies");
				if (error instanceof Error) {
					log.error(`Installation error: ${error.message}`);
				}
				throw error;
			}
		}

		log.info(`${chalk.dim("Next steps:")}
cd ${options.projectName}${!shouldInstallDeps ? `\n${options.packageManager} install` : ""}
${options.packageManager === "npm" ? "npm run" : options.packageManager} dev`);
	} catch (error) {
		s.stop("Failed");
		if (error instanceof Error) {
			log.error(`Error during project creation: ${error.message}`);
			process.exit(1);
		}
	}
}
