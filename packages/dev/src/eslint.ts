import { runCommand, eslint as runESLint } from './commands'

export const eslint = (argv: string[]): Promise<number> => {
  return runESLint('--config', 'eslint.json', '--ignore-pattern', '/lib/', '--fix', ...argv, '.')
}

if (require.main === module) {
  runCommand(eslint)
}
