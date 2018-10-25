const { OpenControl } = require("../OpenControl");

describe("OpenControl Type", () => {
  it("has the correct fields", () => {
    const fields = Object.keys(OpenControl.getFields());
    const expected = [
      "documentation_complete",
      "name",
      "schema_version",
      "satisfies",
      "key",
      "system",
      "responsible_role",
      "references",
      "verifications"
    ];

    expect(fields).toEqual(expect.arrayContaining(expected));
  });
});
