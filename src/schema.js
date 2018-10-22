const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { ITSG33a } = require('./ITSG33a')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ITSG33a: {
      description: 'Returns data on project compliance with various controls',
      type: ITSG33a,
      resolve: () => {
        return {}
      },
    },
  },
})

module.exports.schema = new GraphQLSchema({ query })
