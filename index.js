const express = require('express')
const graphqlHTTP = require('express-graphql')
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

let server = express()

server.use(
  '/graphql',
  graphqlHTTP({ schema: new GraphQLSchema({ query }), graphiql: true }),
)

server.listen(3005)
