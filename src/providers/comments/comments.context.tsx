"use client";

import { Comment } from "@models/comment.model";
import { createContext } from "react";

export interface CommentsContext {
  comments: Comment[];
  loading: boolean;
  addComment: (comment: Comment) => void;
  removeComment: (comment: Comment) => void;
}

export const CommentsContext = createContext<CommentsContext | undefined>(
  undefined
);
