global.fetch = require('jest-fetch-mock')
const fs = require('fs')
const { getChecks } = require('../getChecks.js')
const { fetchYaml } = require('../fetchYaml.js')
const { createCompliance } = require('../createCompliance.js')

fetch.mockResponses(
  [
    `
name: nano
standards:
  ITSG-33a:
    SA-11 (1): {}
`,
    { status: 200 },
  ],
  [
    fs.readFileSync('src/__tests__/testData/definitions/ITSG-33a.yaml'),
    { status: 200 },
  ],
)

let checks, certification, definitions

describe('createCompliance', () => {
  beforeAll(async () => {
    // real fixture path
    checks = await getChecks('src/__tests__/testData/checks/*.json')
    // fake but valid url, response is just from the mock
    // first call gets the first mock with the certification
    certification = await fetchYaml('https://example.com/foo.yaml')
    // second call gets second mock with the full definitions
    definitions = await fetchYaml('https://example.com/ITSG-33a.yaml')
  })

  it('creates a compliance object', async () => {
    let compliancePosture = await createCompliance({
      definitions,
      checks,
      certification,
    })
    expect(compliancePosture).toEqual({
      name: 'nano',
      standards: {
        'ITSG-33a': {
          'SA_11_1': {
            description:
              'DEVELOPER SECURITY TESTING AND EVALUATION | STATIC CODE ANALYSIS\nThe organization requires the developer of the information system, system component, or information system service to employ static code analysis tools to identify common flaws and document the results of the analysis.',
            family: 'SA',
            name: 'Developer Security Testing',
            verifications: [
              {
                component: 'source_code',
                description:
                  'The application uses an ESLint file to do so static code analysis.',
                origin: 'sa_11_1:latest',
                passed: true,
                references:
                  'https://github.com/cds-snc/vac-benefits-directory/blob/master/.eslintrc.json',
                satisfies: ['SA-11 (1)'],
                timestamp: '2018-10-25T14:33:26Z',
              },
            ],
          },
        },
      },
    })
  })
})
