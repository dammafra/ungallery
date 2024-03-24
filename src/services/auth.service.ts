import {
  Auth,
  GoogleAuthProvider,
  User,
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseService } from "./firebase.service";

class AuthService {
  private auth: Auth;
  private provider: GoogleAuthProvider;

  constructor() {
    this.auth = getAuth(firebaseService.app);
    setPersistence(this.auth, browserLocalPersistence);
    this.provider = new GoogleAuthProvider();
  }

  signIn() {
    return signInWithPopup(this.auth, this.provider).then((credential) => {
      return credential.user;
    });
  }

  signOut() {
    return signOut(this.auth).then(() => {
      return undefined;
    });
  }

  subscribe(callback: (user?: User) => void) {
    onAuthStateChanged(this.auth, (user) => {
      callback(user || undefined);
    });
  }
}

export const authService = new AuthService();
