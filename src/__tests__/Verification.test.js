const { Verification } = require("../Verification");

describe("Verification Type", () => {
  it("has the correct fields", () => {
    const fields = Object.keys(Verification.getFields());
    const expected = [
      "key",
      "name",
      "path",
      "type",
      "description",
      "test_passed",
      "last_run"
    ];

    expect(fields).toEqual(expect.arrayContaining(expected));
  });
});
