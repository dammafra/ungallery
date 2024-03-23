import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";

class FirebaseService {
  app: FirebaseApp;

  constructor() {
    const config: FirebaseOptions = {
      apiKey: "AIzaSyCP_-ynd9XpIcrt4aojBUwxZYw8Cs14l4k",
      authDomain: "ungallery-9fcc5.firebaseapp.com",
      projectId: "ungallery-9fcc5",
      storageBucket: "ungallery-9fcc5.appspot.com",
      messagingSenderId: "1085673273113",
      appId: "1:1085673273113:web:e9b043a1fc5f50aae63788",
    };

    this.app = initializeApp(config);
  }
}

export const firebaseService = new FirebaseService();
