const { runCommand } = require('../packages/dev/lib/commands')
const { run } = require('../packages/dev/lib/run')

if (require.main === module) {
  runCommand(run)
}
