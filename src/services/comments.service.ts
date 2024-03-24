import { Comment } from "@models/comment.model";
import {
  Firestore,
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

  addComment(photoId: string, comment: Comment) {
    return updateDoc(doc(this.db, "comments", photoId), {
      comments: arrayUnion(comment),
    });
  }

  async getComments(photoId: string): Promise<Comment[]> {
    const docRef = doc(this.db, "comments", photoId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      setDoc(docRef, { comments: [] });
    }

    return docSnap.data()?.comments || [];
  }
}

export const commentsService = new CommentsService();
