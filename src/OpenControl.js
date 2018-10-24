const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require("graphql");
const { SatisfactionCriteria } = require("./SatisfactionCriteria");
const { Reference } = require("./Reference");
const { Verification } = require("./Verification");

const OpenControl = new GraphQLObjectType({
  name: "OpenControl",
  description: "OpenControl Type",
  fields: () => ({
    documentation_complete: { description: "key", type: GraphQLBoolean },
    name: {
      description: "name",
      type: GraphQLString
    },
    schema_version: {
      description: "schemaVersion",
      type: GraphQLString
    },
    satisfies: {
      description: "satisfies",
      type: SatisfactionCriteria
    },
    key: {
      description: "key",
      type: GraphQLString
    },
    system: {
      description: "system",
      type: GraphQLString
    },
    responsible_role: {
      description: "responsibleRole",
      type: GraphQLString
    },
    references: {
      description: "references",
      type: Reference
    },
    verifications: {
      description: "verifications",
      type: Verification
    }
  })
});

module.exports.OpenControl = OpenControl;
