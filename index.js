require("dotenv-safe").config();
require("isomorphic-fetch");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { schema } = require("./src/schema");
const { getChecks } = require("./src/getChecks.js");
const { fetchYaml } = require("./src/fetchYaml.js");
const { createCompliance } = require("./src/createCompliance.js");
(async () => {
  const {
    CHECKS_PATH: checksPath,
    DEFINITIONS_URL: definitionsUrl,
    CERTIFICATION_URL: certificationUrl
  } = process.env;

  let server = express();

  let checks = await getChecks(checksPath);
  let certification = await fetchYaml(certificationUrl);
  let definitions = await fetchYaml(definitionsUrl);

  let compliancePosture = await createCompliance({
    definitions,
    checks,
    certification
  });

  server.use(
    "/",
    graphqlHTTP({ schema, graphiql: true, rootValue: compliancePosture })
  );

  server.listen(3000);
})();
