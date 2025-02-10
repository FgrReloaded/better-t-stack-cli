#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { createProject } from './create-project';

const program = new Command();

program
  .name('create-better-t')
  .description('Create a new Better-T Stack project')
  .argument('[project-directory]', 'project name')
  .option('--typescript', 'use TypeScript (default)', true)
  .option('--js, --javascript', 'use JavaScript')
  .option('--git', 'initialize git repository (default)', true)
  .option('--no-git', 'skip git initialization')
  .action(async (projectName?: string, options?: any) => {
    console.log(chalk.bold('\n🚀 Creating a new Better-T Stack project...\n'));

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        default: projectName || 'my-better-t-app',
        when: !projectName,
      },
      {
        type: 'list',
        name: 'database',
        message: 'Select database:',
        choices: [
          { name: 'libSQL (recommended)', value: 'libsql' },
          { name: 'PostgreSQL', value: 'postgres' },
        ],
      },
      {
        type: 'confirm',
        name: 'auth',
        message: 'Add authentication with Better-Auth?',
        default: true,
      },
      {
        type: 'list',
        name: 'features',
        message: 'Select additional features:',
        choices: [
          { name: 'Docker setup', value: 'docker' },
          { name: 'GitHub Actions', value: 'github-actions' },
          { name: 'Basic SEO setup', value: 'seo' },
        ],
      },
    ]);

    const projectOptions = {
      ...options,
      ...answers,
      projectName: projectName || answers.projectName,
    };

    await createProject(projectOptions);
  });

program.parse();