import React, { useEffect, useState } from "react";

import PacmanLoader from "react-spinners/PacmanLoader";

import { CommentDTO } from "../../../../shared/types";
import { getComments } from "../../requests";
import { Container } from "./CommentsSection.styles";
import Comment from "./Comment";

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<CommentDTO[]>([]);

  useEffect(() => {
    (async () => {
      setComments(await getComments());
    })();
  }, []);

  return (
    <Container>
      {!comments.length ? (
        <PacmanLoader />
      ) : (
        <>
          {comments.map((comment) => (
            <Comment userName={comment.userName} body={comment.body} key={comment.userName} />
          ))}
        </>
      )}
    </Container>
  );
};

export default CommentsSection;
