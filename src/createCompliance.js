const deepFreeze = object => {
  let propNames = Object.getOwnPropertyNames(object)
  for (let name of propNames) {
    let value = object[name]
    object[name] =
      value && typeof value === 'object' ? deepFreeze(value) : value
  }
  return Object.freeze(object)
}

module.exports.createCompliance = async ({
  definitions,
  checks,
  certification,
}) => {
  let complianceStatus = checks.reduce((status, check) => {
    check.satisfies.forEach(ctl => {
      if (status[ctl]) {
        if (status[ctl].verifications) {
          status[ctl].verifications = [...status[ctl].verifications, check]
        } else {
          status[ctl].verifications = [check]
        }
      } else {
        status[ctl] = definitions[ctl]
        status[ctl].verifications = [check]
        status[ctl].id = ctl
      }
    })
    return status
  }, {})

  return deepFreeze(complianceStatus)
}
