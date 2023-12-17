import { Fields } from "../types";
import utils from ".";
import { UserRecord } from "firebase-admin/auth";

export default function populateFields(user: Partial<UserRecord>) {
  let fields = {} as Fields;

  for (const field of utils.config.preInstallConfig.authFieldsToPopulate) {
    const value = user[field];
    if (typeof value !== "undefined") {
      fields[field] = value;
    }
  }

  return fields;
}
