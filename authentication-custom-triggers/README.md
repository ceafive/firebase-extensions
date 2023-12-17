# Custom Authentication Triggers

**Author**: Castro Agbo (**[https://ceafive.netlify.app](https://ceafive.netlify.app/)**)

**Description**: This extension allows developers to easily customize and extend authentication workflows by providing triggers for various authentication events. With this extension, you can seamlessly integrate custom logic or third-party services when users sign up, sign in, or when their account details are updated.

## Additional Setup

###Firebase Firestore and Firebase Authentication setup

Make sure that you've set up a [Firestore Firestore](https://firebase.google.com/docs/firestore/quickstart) and enabled [Firesbase Auth](https://firebase.google.com/docs/auth) in your Firebase project.

### Installation time

Note that the extension itself will take **~1h** to finish installing & processing

## Billing

To install an extension, your project must be on the Blaze (pay as you go) plan. You will be charged a small amount (typically around $0.01/month) for the Firebase resources required by this extension (even if it is not used).
This extension uses other Firebase and Google Cloud Platform services, which have associated charges if you exceed the service's no-cost tier:

- Cloud Firestore
- Cloud Authentication
- Cloud Functions (See [FAQs](https://firebase.google.com/support/faq#extensions-pricing))

[Learn more about Firebase billing](https://firebase.google.com/pricing).

**Configuration Parameters:**

- Users collection path: The Firestore collection to save users documents to.

- Fields to copy: Authentication fields to populate on user firestore document creation

- Cloud Functions location: Where do you want to deploy the functions created for this extension? For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).

**Cloud Functions:**

- **onUserSignUp:** This function syncs user authentication creation with firestore and creates a firestore document for each user created

**Access Required**:

This extension will operate with the following project IAM roles:

- datastore.user (Reason: This extension requires read/write access to Firestore.)
