import { IAuthFieldsToCopy, ExtConfig } from "../types";

const preInstallConfig = (env: NodeJS.ProcessEnv): ExtConfig => ({
  usersCollection: env.USERS_COLLECTION!,
  sendEmailVerification: env.SEND_VERIFICATION_EMAIL_ON_CREATE === "true",
  authFieldsToPopulate: env.AUTH_FIELDS_TO_COPY!.split(",") as (keyof IAuthFieldsToCopy)[],
});

export default { preInstallConfig: preInstallConfig(process.env) };
