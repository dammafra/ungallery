import {
  Firestore,
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { firebaseService } from "./firebase.service";

class StorageService {
  private db: Firestore;

  constructor() {
    this.db = getFirestore(firebaseService.app);
  }

  addFavourite(userId: string, photoId: string) {
    return updateDoc(doc(this.db, "favourites", userId), {
      photos: arrayUnion(photoId),
    });
  }

  removeFavourite(userId: string, photoId: string) {
    return updateDoc(doc(this.db, "favourites", userId), {
      photos: arrayRemove(photoId),
    });
  }

  async getFavourites(userId: string) {
    const docRef = doc(this.db, "favourites", userId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      setDoc(docRef, { photos: [] });
    }

    return docSnap.data()?.photos || [];
  }
}

export const storageService = new StorageService();
