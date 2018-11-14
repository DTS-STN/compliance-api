const { GraphQLList, GraphQLSchema, GraphQLObjectType } = require('graphql')
const { OpenControl } = require('./types/OpenControl')
const { ControlID } = require('./types/ControlID')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    controls: {
      description: 'Returns a list of all controls',
      type: new GraphQLList(OpenControl),
      resolve: root => {
        return Object.entries(root).reduce((controls, [_k, v]) => {
          return [...controls, v]
        }, [])
      },
    },
    verifiedControls: {
      description: 'Returns a list of passing controls',
      type: new GraphQLList(OpenControl),
      resolve: root => {
        return Object.entries(root).reduce((controls, [_k, v]) => {
          let passed = v.verifications.filter(ver => ver.passed)
          if (passed.length > 0) {
            return [...controls, v]
          } else {
            return controls
          }
        }, [])
      },
    },
    failedControls: {
      description: 'Returns a list of failing controls',
      type: new GraphQLList(OpenControl),
      resolve: root => {
        return Object.entries(root).reduce((controls, [_k, v]) => {
          let passed = v.verifications.filter(ver => !ver.passed)
          if (passed.length > 0) {
            return [...controls, v]
          } else {
            return controls
          }
        }, [])
      },
    },
    control: {
      description: 'Returns details for a single control',
      type: OpenControl,
      args: {
        id: {
          type: ControlID,
          description: 'The id of the control to return.',
        },
      },
      resolve: (root, { id }) => {
        return root[id]
      },
    },
  },
})

module.exports.schema = new GraphQLSchema({ query })
