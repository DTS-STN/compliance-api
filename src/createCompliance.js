const isEmpty = suspect => Object.keys(suspect).length === 0

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
      if (isEmpty(itsg[ctl])) {
				itsg[ctl] = definitions[ctl]
      }
      if (!itsg[ctl].verifications) {
        itsg[ctl].verifications = []
      }

      itsg[ctl].verifications = [...itsg[ctl].verifications, check]
    })
  })

  return certification
}
