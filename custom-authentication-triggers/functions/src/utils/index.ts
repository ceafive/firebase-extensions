import config from "./config";
import sendVerificationEmail from "./sendVerificationEmail";
import syncUserProfile from "./syncUserProfile";
import updateLastLoginTimestamp from "./updateLastLoginTimestamp";
import populateFields from "./populateFields";
import onUserSignUpExtension from "./onUserSignUpExtension";

export default {
  config,
  sendVerificationEmail,
  syncUserProfile,
  updateLastLoginTimestamp,
  populateFields,
  onUserSignUpExtension,
};
