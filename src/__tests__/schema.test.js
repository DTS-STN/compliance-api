const { schema } = require('../schema')

describe('GraphQL Schema', () => {
  it('Has a ITSG33a type', () => {
    let itsg = schema.getType('ITSG33a')
    expect(itsg.name).toEqual('ITSG33a')
  })
})
