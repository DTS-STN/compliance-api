const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require("graphql");

const Verification = new GraphQLObjectType({
  name: "Verification",
  description: "OpenControl Verification Type",
  fields: () => ({
    key: { description: "key", type: GraphQLString },
    name: { description: "name", type: GraphQLString },
    path: {
      description: "path",
      type: GraphQLString
    },
    type: {
      description: "verification type",
      type: GraphQLString
    },
    description: {
      description: "description",
      type: GraphQLString
    },
    test_passed: {
      description: "testPassed",
      type: GraphQLBoolean
    },
    last_run: {
      description: "lastRun",
      type: GraphQLString
    }
  })
});

module.exports.Verification = Verification;
