import { runCommand, tsc } from './commands'

export const build = (argv: string[]): Promise<number> => tsc(...argv)

if (require.main === module) {
  runCommand(build)
}
