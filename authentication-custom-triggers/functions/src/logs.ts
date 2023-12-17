import * as functions from "firebase-functions";
import { Fields } from "./types";

export default {
  sendingVerificationEmail: (email: string) => functions.logger.log(`Sending verification email to ${email} ====>`),
  sentVerificationEmail: (email: string) => functions.logger.log(`Email sent to ${email} ====>`),
  sendingEmailError: (email: string, error: unknown) => functions.logger.error(`Error sending verification email to ${email} ====>`, error),
  skipSendVerificationEmail: (email: string, sendEmailVerification: boolean) =>
    functions.logger.log(
      `Sending verification email to ${email} skipped due to 'Send verification email on user creation' set to ${sendEmailVerification} ====>`,
    ),
  startWiteToFirestore: (usersCollection: string, fieldsWritten: Fields) =>
    functions.logger.log(`Writing data to firestore collection ${usersCollection} ====>`, fieldsWritten),
  endWriteToFirestore: () => functions.logger.log(`Write to firestore complete ====>`),
  anErrorOccured: (error: unknown) => functions.logger.error(`Something went wrong ====>`, error),
};
