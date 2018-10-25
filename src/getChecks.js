const fs = require('fs').promises
const glob = require('glob-fs')({ gitignore: true })

const getChecks = async (pattern = '/checks/*.json') => {
  let files = await glob.readdirPromise(pattern)
  let checks = await Promise.all(
    files.map(file => fs.readFile(file, { encoding: 'utf-8' })),
  )
  return checks.map(c => JSON.parse(c))
}
module.exports.getChecks = getChecks
