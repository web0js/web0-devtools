const { cli } = require('../packages/dev/lib/cli')

if (require.main === module) {
  cli(['run', ...process.argv.slice(2)])
}
