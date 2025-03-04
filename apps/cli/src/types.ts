export type ProjectDatabase = "sqlite" | "postgres" | "none";
export type ProjectOrm = "drizzle" | "prisma" | "none";
export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";
export type ProjectFeature = "docker" | "github-actions" | "SEO";

export interface ProjectConfig {
	projectName: string;
	database: ProjectDatabase;
	orm: ProjectOrm;
	auth: boolean;
	features: ProjectFeature[];
	git: boolean;
	packageManager: PackageManager;
	noInstall?: boolean;
	turso?: boolean;
}
