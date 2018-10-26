const isEmpty = (suspect = {}) => Object.keys(suspect).length === 0

const makeSchemaFriendly = str =>
  str.replace(/(\w{2})-(\d{1,2})/, '$1_$2').replace(/ \((\d{1,2})\)/, '_$1')

module.exports.createCompliance = async ({
  definitions,
  checks,
  certification,
}) => {
  let {
    standards: { 'ITSG-33a': itsg },
  } = certification

  checks.forEach(check => {
    check.satisfies.forEach(ctl => {
      if (Object.keys(itsg).includes(ctl)) {
        delete itsg[ctl]
        // only add details from the definitions if we haven't before
        if (isEmpty(itsg[makeSchemaFriendly(ctl)])) {
          itsg[makeSchemaFriendly(ctl)] = definitions[ctl]
        }

        if (!itsg[makeSchemaFriendly(ctl)].verifications) {
          itsg[makeSchemaFriendly(ctl)].verifications = []
        }

        itsg[makeSchemaFriendly(ctl)].verifications = [
          ...itsg[makeSchemaFriendly(ctl)].verifications,
          check,
        ]
      }
    })
  })

  return certification
}
