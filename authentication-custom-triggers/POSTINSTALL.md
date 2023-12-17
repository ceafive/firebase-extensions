## Testing the extension

You can test out the extension right away by following these steps:

1. Go to the [Firebase Authentication dashboard](https://console.firebase.google.com/project/_/authentication) in the Firebase console.
2. If it doesn't already exist, create authentication and a firestore database
3. Add a new user email and password in authentication

```
${email}: "dummy@dummy.com"
${password}: "dummy123"
```

4. In a few seconds, you'll see a ${param:USERS_COLLECTION} document and then populate with valid values from {param:AUTH_FIELDS_TO_COPY}

## Handling errors

If the extension encounters an error, it will write some errors in the Cloud Function logs for the extension, to avoid exposing sensitive information.

## Monitoring

As a best practice, you can [monitor the activity](https://firebase.google.com/docs/extensions/manage-installed-extensions#monitor) of your installed extension, including checks on its health, usage, and logs.
