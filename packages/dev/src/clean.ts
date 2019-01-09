import { runCommand, rimraf } from './commands'

export const clean = (argv: string[]): Promise<number> => rimraf('lib', 'coverage', 'package-lock.json', ...argv)

if (require.main === module) {
  runCommand(clean)
}
