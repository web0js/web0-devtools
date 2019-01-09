import { runCommand, prettier } from './commands'

export const format = (argv: string[]): Promise<number> => prettier('--write', ...argv, 'src/**/*.ts', '**/*.js')

if (require.main === module) {
  runCommand(format)
}
