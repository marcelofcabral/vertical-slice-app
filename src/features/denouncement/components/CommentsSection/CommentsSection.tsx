import React, { useEffect, useState } from "react";

import PacmanLoader from "react-spinners/PacmanLoader";

import { CommentDTO } from "../../../../shared/types";
import { getComments } from "../../requests";
import { Container, SectionTitle, SectionBody } from "./CommentsSection.styles";
import Comment from "./Comment";

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<CommentDTO[] | null>(null);

  useEffect(() => {
    (async () => {
      setComments(await getComments());
    })();
  }, []);

  return (
    <Container>
      <SectionTitle>See what users think about this solution</SectionTitle>
      <SectionBody>
        {!comments ? (
          <PacmanLoader />
        ) : (
          <>
            {comments.map((comment) => (
              <Comment userName={comment.userName} body={comment.body} key={comment.userName} />
            ))}
          </>
        )}
      </SectionBody>
    </Container>
  );
};

export default CommentsSection;
