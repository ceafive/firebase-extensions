import * as admin from "firebase-admin";

type IAuthFieldsToCopy<T = Pick<admin.auth.UserRecord, "uid" | "displayName" | "email" | "phoneNumber" | "photoURL" | "disabled">> = {
  -readonly [P in keyof T]: T[P];
};

type ExtConfig = {
  usersCollection: string;
  sendEmailVerification: boolean;
  authFieldsToPopulate: (keyof IAuthFieldsToCopy)[];
};

type Fields = { [key: string]: string | boolean };

export { ExtConfig, IAuthFieldsToCopy, Fields };
