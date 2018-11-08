const {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql')
const { OpenControl } = require('./OpenControl')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    controls: {
      description: 'Returns a list of all controls',
      type: new GraphQLList(OpenControl),
      resolve: (root) => {
        return Object.entries(root).reduce((controls, [_k, v]) => {
          return [...controls, v]
        }, [])
      },
    },
    verifiedControls: {
      description: 'Returns a list of passing controls',
      type: new GraphQLList(OpenControl),
      resolve: (root) => {
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
      resolve: (root) => {
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
  },
})

module.exports.schema = new GraphQLSchema({ query })
