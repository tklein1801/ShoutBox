class ShoutBox {
  constructor() {
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
    firebase.initializeApp(this.firebaseConfig);
    this.fb = firebase.database();
  }

  getMessages() {
    return new Promise((res, rej) => {
      this.fb.ref(`messages`).on(
        "value",
        (snapshot) => {
          res(snapshot.val());
        },
        (error) => {
          rej(error);
        }
      );
    });
  }

  /**
   * Save new message
   * @param {string} username
   * @param {string} message
   */
  addMessage(username, message) {
    const msg = {
      username: username,
      message: message,
      postetAt: new Date().getTime(),
    };
    return new Promise((res, rej) => {
      this.fb
        .ref(`messages`)
        .push(msg)
        .catch((error) => {
          rej(error);
        });
      res(true);
    });
  }

  /**
   * Delete an existing message
   * @param {string} messageId
   */
  deleteMessage(messageId) {
    return new Promise((res, rej) => {
      this.fb
        .ref(`messages/${messageId}`)
        .remove()
        .catch((error) => {
          rej(error);
        });
      res(true);
    });
  }
}
