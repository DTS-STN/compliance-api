const { getChecks } = require('../getChecks.js')

describe('getChecks', () => {
  it('returns an array of check objects from json files', async () => {
    let [check] = await getChecks('src/__tests__/testData/checks')

    expect(check).toEqual({
      component: 'source_code',
      description:
        'The application uses an ESLint file to do so static code analysis.',
      origin: 'sa_11_1:latest',
      passed: true,
      references:
        'https://github.com/cds-snc/vac-benefits-directory/blob/master/.eslintrc.json',
      satisfies: ['SA-11 (1)'],
      timestamp: '2018-10-25T14:33:26Z',
    })
  })

  it(`throws an error is the directory isn't readable`, async () => {
    try {
      await getChecks('asdfasdf')
    } catch ({ message }) {
      expect(message).toMatch(/isn't a readable directory/)
    }
  })
})
