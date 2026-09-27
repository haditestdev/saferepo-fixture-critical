import { hashSignatureMD5, buildUserSearchQuery, DUMMY_AWS_KEY } from "../lib/security-fixtures";

describe("Critical Fixture Verification", () => {
  it("verifies MD5 generation", () => {
    expect(hashSignatureMD5("test")).toHaveLength(32);
  });

  it("verifies SQL string builder", () => {
    expect(buildUserSearchQuery("admin@example.com")).toContain("SELECT * FROM accounts");
  });

  it("contains synthetic test key prefix", () => {
    expect(DUMMY_AWS_KEY.startsWith("AKIA")).toBe(true);
  });
});
