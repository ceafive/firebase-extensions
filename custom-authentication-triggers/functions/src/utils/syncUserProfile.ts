import * as admin from "firebase-admin";

export default async function syncUserProfile(newData: admin.firestore.DocumentData, oldData: admin.firestore.DocumentData): Promise<void> {
  // Default implementation
}
