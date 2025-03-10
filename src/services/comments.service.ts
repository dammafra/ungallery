import { Comment } from "@models/comment.model";
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

class CommentsService {
  private db: Firestore;

  constructor() {
    this.db = getFirestore(firebaseService.app);
  }

  async addComment(photoId: string, comment: Comment) {
    const docRef = doc(this.db, "comments", photoId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      setDoc(docRef, { comments: [] });
    }

    return updateDoc(docRef, {
      comments: arrayUnion(comment),
    });
  }

  async removeComment(photoId: string, comment: Comment) {
    return updateDoc(doc(this.db, "comments", photoId), {
      comments: arrayRemove(comment),
    });
  }

  async getComments(photoId: string): Promise<Comment[]> {
    return getDoc(doc(this.db, "comments", photoId)).then(
      (res) => res.data()?.comments || []
    );
  }
}

export const commentsService = new CommentsService();
