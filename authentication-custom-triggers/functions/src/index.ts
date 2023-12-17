import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import utils from "./utils";

admin.initializeApp();

export const onUserSignUp = functions.auth.user().onCreate(async (user) => {
  return await utils.onUserSignUpExtension(user);
});
