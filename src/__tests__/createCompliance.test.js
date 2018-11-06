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
    AU-6: {}
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
    checks = await getChecks('src/__tests__/testData/checks')
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
      'SA-11 (1)': {
        description:
          'DEVELOPER SECURITY TESTING AND EVALUATION | STATIC CODE ANALYSIS\nThe organization requires the developer of the information system, system component, or information system service to employ static code analysis tools to identify common flaws and document the results of the analysis.',
        family: 'SA',
        id: 'SA-11 (1)',
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
      'SI-10': {
        description:
          '(A) The information system checks the validity of [Assignment: organization-defined information inputs].',
        family: 'SI',
        id: 'SI-10',
        name: 'Information Input Validation',
        verifications: [
          {
            component: 'Source code',
            description: 'The application contains tests to validate inputs',
            origin: 'cdssnc/url-check-compliance:latest',
            passed: false,
            references:
              'https://github.com/cds-snc/mrpinchy-confession-box/blob/master/__tests__/form.test.js',
            satisfies: ['SI-10'],
            timestamp: '2018-10-30T14:28:29Z',
          },
        ],
      },
    })
  })
})
