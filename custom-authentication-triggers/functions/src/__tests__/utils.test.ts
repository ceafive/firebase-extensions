import utils from "../utils";

const { config, populateFields } = utils;
const { preInstallConfig } = config;

describe("preInstallConfig", () => {
  it("sets usersCollection from env var", () => {
    expect(preInstallConfig.usersCollection).toBe("collection");
  });
  it("sets sendEmailVerification from env var", () => {
    expect(preInstallConfig.sendEmailVerification).toBe(true);
  });
  it("populates authFields from env var", () => {
    expect(preInstallConfig.authFieldsToPopulate).toEqual(["email", "displayName", "uid"]);
  });
});

describe("populateFields", () => {
  const user = {
    name: "John",
    email: "john@email.com",
  };

  const expectedFields = {
    email: "john@email.com",
  };

  test("populates fields from user", () => {
    const result = populateFields(user);
    expect(result).toEqual(expectedFields);
  });

  test("populates fields from user", () => {
    jest.mock("../utils/config", () => ({
      default: {
        preInstallConfig: jest.fn(() => ({
          authFieldsToPopulate: ["email", "height"],
        })),
      },
    }));
    const result = populateFields(user);
    expect(result).toEqual(expectedFields);
  });
});
