const { GraphQLObjectType, GraphQLString } = require('graphql')

// Define a type that describes the data
const ITSG33a = new GraphQLObjectType({
  name: 'ITSG33a',
  description: 'An example date/time object',
  fields: () => ({
    AC2: {
      description: 'Account Management',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AC3: {
      description: 'Access Enforcement',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AC6: {
      description: 'Least Priviledge',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AU2: {
      description: 'Auditable Events',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AU3: {
      description: 'Content of Audit Records',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AU3_1: {
      description: '(1) Content of Audit Records',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AU6: {
      description: 'Audit Review, Analysis, And Reporting',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AU8: {
      description: 'Time Stamps',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    AU8_1: {
      description: 'Time Stamps (1)',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CA2_2: {
      description: 'Security Assessments | Specialized Assessments (2)',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CA8: {
      description: 'Penetration Testing',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CA8_1: {
      description: 'Penetration Testing (1)',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CM2: {
      description: 'Baseline Configuration',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CM6_1: {
      description: 'Configuration Settings',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CM7: {
      description: 'Least Functionality',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CM8: {
      description: 'Information System Component Inventory',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CM8_1: {
      description:
        'Information System Component Inventory - Updates During Installs and Removals',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    CM8_4: {
      description:
        'Information System Component Inventory - Accountable Information',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    IA5_7: {
      description:
        'Authenticator Management - No embedded unencrypted static keys',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    PL8: {
      description: 'Information Security Architecture',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    RA5: {
      description: 'Vulnerability Scanning',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SA11: {
      description: 'Developer Security Testing',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SA11_1: {
      description: 'Static Code Analysis',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SA11_4: {
      description: 'Manual Code Reviews',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SA12: {
      description: 'Supply Chain Protection',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SA12: {
      description: 'Supply Chain Protection',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SA15_4: {
      description: 'Threat Modeling / Vulnerability Analysis',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SA22: {
      description: 'Unsupported System Components',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SC7: {
      description: 'Boundary Protection',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SC8: {
      description: 'Transmission confidentiality and Integrity',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SC12: {
      description: 'Cryptographic Key Management and Establishment',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SC13: {
      description: 'Cryptographic Protection',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SI2: {
      description: 'Flaw remediation',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SI5: {
      description: 'Security Alerts, Advisories, and Directives',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SI10: {
      description: 'Information Input Validation',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SI11: {
      description: 'Error Handling',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
    SI17: {
      description: 'Fail-Safe Procedures',
      type: GraphQLString,
      resolve: () => {
        return 'totally compliant'
      },
    },
  }),
})

module.exports.ITSG33a = ITSG33a
