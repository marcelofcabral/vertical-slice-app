import { CommentModel, UserModel } from "../../../services/api/types";
import { CommentDTO } from "../../../shared/types";

const getCommentDTOList = (users: UserModel[], comments: CommentModel[]): CommentDTO[] => {
  comments.sort((commentA, commentB) => commentA.userId - commentB.userId);

  const result: CommentDTO[] = [];

  let commentsArrIdx = 0;

  for (const user of users) {
    let comment = comments[commentsArrIdx];
    while (commentsArrIdx < comments.length && comment.userId === user.id) {
      result.push({
        userName: user.name,
        body: comment.body,
      });

      comment = comments[++commentsArrIdx];
    }
  }

  return result;
};

export default getCommentDTOList;
