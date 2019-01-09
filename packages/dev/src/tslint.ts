import { runCommand, tslint as runTSLint } from './commands'

export const tslint = (argv: string[]): Promise<number> => runTSLint('--project', 'tsconfig.json', '--fix', ...argv)

if (require.main === module) {
  runCommand(tslint)
}
