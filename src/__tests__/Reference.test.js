const { Reference } = require('../Reference')

describe('Reference Type', () => {
  it('has the correct fields', () => {
    let fields = Object.keys(Reference.getFields())
    expect(fields).toContain("name", "type", "path")
  })
})
