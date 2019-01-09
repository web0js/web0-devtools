import { runCommand, lerna } from './commands'

export const add = (argv: string[]): Promise<number> => lerna('add', ...argv, '--no-bootstrap')

if (require.main === module) {
  runCommand(add)
}
