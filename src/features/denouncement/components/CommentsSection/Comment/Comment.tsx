import React from "react";

import { CommentProps } from "./Comment.types";

import { UserNameText, CommentText, Container } from "./Comment.styles";

const Comment: React.FC<CommentProps> = ({ userName, body }) => (
  <Container>
    <UserNameText>{userName}</UserNameText>
    <CommentText>{body}</CommentText>
  </Container>
);

export default Comment;
