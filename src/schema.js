const {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql')
const { OpenControl } = require('./OpenControl')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    controls: {
      description: 'Returns a list of all controls',
      type: new GraphQLList(OpenControl),
      resolve: (root, args, context, info) => {
        return Object.entries(root).reduce((controls, [k, v]) => {
          return [...controls, v]
        }, [])
      },
    },
    verifiedControls: {
      description: 'Returns a list of all controls',
      type: new GraphQLList(OpenControl),
      resolve: (root, args, context, info) => {
        return Object.entries(root).reduce((controls, [k, v]) => {
          let passed = v.verifications.filter(ver => ver.passed)
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
