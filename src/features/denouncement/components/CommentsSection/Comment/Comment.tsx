import React from "react";

import { CommentProps } from "./Comment.types";

import { UserNameText, CommentText } from "./Comment.styles";

const Comment: React.FC<CommentProps> = ({ userName, body }) => (
  <>
    <UserNameText>{userName}</UserNameText>
    <CommentText>{body}</CommentText>
  </>
);

export default Comment;
