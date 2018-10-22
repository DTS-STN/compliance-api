const { schema } = require('../schema')

describe('ITSG33a Type', () => {
  it(`has fields for each of Damien's 36 theses`, () => {
    let itsg = schema.getType('ITSG33a')
    let fields = Object.keys(itsg.getFields())
    expect(fields).toHaveLength(36)
  })
})

