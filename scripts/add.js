const { cli } = require('../packages/dev/lib/cli')

if (require.main === module) {
  cli(['add', ...process.argv.slice(2)])
}
