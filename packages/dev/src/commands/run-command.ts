export const runCommand = (command: (argv: string[]) => Promise<number>) => {
  command(process.argv.slice(2))
    .then((exitCode) => {
      if (exitCode) {
        process.exit(exitCode)
      }
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
