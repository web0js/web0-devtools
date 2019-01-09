import { runCommand, lerna } from './commands'

export const run = (argv: string[]): Promise<number> => lerna('run', ...argv)

if (require.main === module) {
  runCommand(run)
}
