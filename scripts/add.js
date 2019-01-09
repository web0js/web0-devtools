const { runCommand } = require('../packages/dev/lib/commands')
const { add } = require('../packages/dev/lib/add')

if (require.main === module) {
  runCommand(add)
}
