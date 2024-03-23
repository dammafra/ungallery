import {
  Auth,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseService } from "./firebase.service";

class AuthService {
  private auth: Auth;
  private provider: GoogleAuthProvider;

  constructor() {
    this.auth = getAuth(firebaseService.app);
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

export const authService = new AuthService();
