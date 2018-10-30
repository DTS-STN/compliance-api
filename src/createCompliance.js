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

  let compliance = Object.keys(itsg).reduce((cplnc, key) => {
    cplnc[makeSchemaFriendly(key)] = definitions[key]
    return cplnc
  }, {})

  let controlsWeCareAbout = Object.keys(itsg)

  checks.forEach(check => {
    check.satisfies.forEach(ctl => {
      if (controlsWeCareAbout.includes(ctl)) {
        if (!compliance[makeSchemaFriendly(ctl)].verifications) {
          compliance[makeSchemaFriendly(ctl)].verifications = []
        }

        compliance[makeSchemaFriendly(ctl)].verifications = [
          ...compliance[makeSchemaFriendly(ctl)].verifications,
          check,
        ]
      }
    })
  })

  certification.standards['ITSG-33a'] = compliance
  return certification
}
