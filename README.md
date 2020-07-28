<h1 align="center"><strong>ShoutBox</strong></h1>

## Important

**1.** You need to create an Firebase project
**2.** Replace this.firebaseConfig in `./assets/js/shoutbox.js` with your own config

```
this.firebaseConfig = {
  apiKey: "ENTER",
  authDomain: "ENTER",
  databaseURL: "ENTER",
  projectId: "ENTER",
  storageBucket: "ENTER",
  messagingSenderId: "ENTER",
  appId: "ENTER",
  measurementId: "ENTER",
};
```

**3.** Now you should be able to receive and submit messages
**Important:** Don't forget to create some .rules to secure your database.

### Road to v1.0

- [ ] Add .rules for Firebase
- [ ] Add an user registration & login
  - Only the author of an message should delete it

### Ressources

[jQuery v3.4.1](ttps://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js)
[Bootstrap v4.3.1](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
[Firebase v7.15.5](https://firebase.google.com)
[Google Fonts](https://fonts.google.com)
[CookieJS](https://files.dulliag.de/web/js/cookie.js)
[FontAwesome](https://fontawesome.com)
