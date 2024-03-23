import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  Auth,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

class FirebaseService {
  private auth: Auth;
  private provider: GoogleAuthProvider;

  constructor() {
    const config: FirebaseOptions = {
      apiKey: "AIzaSyCP_-ynd9XpIcrt4aojBUwxZYw8Cs14l4k",
      authDomain: "ungallery-9fcc5.firebaseapp.com",
      projectId: "ungallery-9fcc5",
      storageBucket: "ungallery-9fcc5.appspot.com",
      messagingSenderId: "1085673273113",
      appId: "1:1085673273113:web:e9b043a1fc5f50aae63788",
    };

    const app = initializeApp(config);
    this.auth = getAuth(app);
    this.provider = new GoogleAuthProvider();
  }

  signIn() {
    return signInWithPopup(this.auth, this.provider).then((credential) => {
      sessionStorage.setItem("user", JSON.stringify(credential.user));
      return credential.user;
    });
  }

  signOut() {
    return signOut(this.auth).then(() => {
      sessionStorage.removeItem("user");
      return undefined;
    });
  }
}

export const firebaseService = new FirebaseService();
