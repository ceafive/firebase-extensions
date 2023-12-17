import * as admin from "firebase-admin";
import utils from ".";
import logs from "../logs";

export default async function onUserSignUpExtension(user: admin.auth.UserRecord): Promise<void> {
  try {
    const fields = utils.populateFields(user);

    logs.startWiteToFirestore(utils.config.preInstallConfig.usersCollection, fields);
    await admin.firestore().collection(utils.config.preInstallConfig.usersCollection).doc(user.uid).set(fields);
    logs.endWriteToFirestore();
  } catch (error) {
    logs.anErrorOccured(error);
  }
}
