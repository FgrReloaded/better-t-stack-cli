import { execa } from 'execa';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';

interface ProjectOptions {
  projectName: string;
  typescript: boolean;
  git: boolean;
  database: 'libsql' | 'postgres';
  auth: boolean;
  features: string[];
}

export async function createProject(options: ProjectOptions) {
  const spinner = ora('Creating project directory...').start();
  const projectDir = path.resolve(process.cwd(), options.projectName);

  try {
    await fs.ensureDir(projectDir);
    spinner.succeed();

    spinner.start('Cloning template repository...');
    await execa('git', ['clone', '--depth', '1', 'https://github.com/AmanVarshney01/Better-T-Stack.git', projectDir]);
    spinner.succeed();
    spinner.start('Removing template .git folder...');
    await fs.remove(path.join(projectDir, '.git'));
    spinner.succeed();

    if (options.git) {
      spinner.start('Initializing git repository...');
      await execa('git', ['init'], { cwd: projectDir });
      spinner.succeed();
    }

    spinner.start('Installing dependencies...');
    await execa('bun', ['install'], { cwd: projectDir });
    spinner.succeed();

    spinner.start('Setting up database...');
    if (options.database === 'libsql') {
      await execa('bun', ['run', 'db:local'], { cwd: projectDir });
      await execa('bun', ['run', 'db:push'], { cwd: projectDir });
    }
    spinner.succeed();

    console.log('\n✨ Project created successfully!\n');
    console.log('Next steps:');
    console.log(`  cd ${options.projectName}`);
    console.log('  bun dev');
  } catch (error) {
    spinner.fail('Failed to create project');
    console.error(error);
    process.exit(1);
  }
}