import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { getAuth, signInWithCustomToken, sendEmailVerification } from "firebase/auth";
import config from "./config";
import { initializeApp } from "firebase/app";
import logs from "../logs";

export default async function sendVerificationEmail(user: admin.auth.UserRecord): Promise<void> {
  if (config.preInstallConfig.sendEmailVerification) {
    try {
      logs.sendingVerificationEmail(user?.email!);

      const FIREBASE_CONFIG = JSON.parse(String(process.env.FIREBASE_CONFIG!));
      const app = initializeApp(FIREBASE_CONFIG);

      const token = await admin.auth().createCustomToken(user.uid);
      const auth = getAuth(app);
      const result = await signInWithCustomToken(auth, token);
      await sendEmailVerification(result.user);
      await auth.signOut();

      logs.sentVerificationEmail(user?.email!);
    } catch (error) {
      logs.sendingEmailError(user?.email!, error);
    }
  } else {
    logs.skipSendVerificationEmail(user?.email!, config.preInstallConfig.sendEmailVerification);
  }
}
