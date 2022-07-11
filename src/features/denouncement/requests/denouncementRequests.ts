import api, { isApiError } from "../../../services/api";

import { CommentDTO } from "../../../shared/types";
import { UserModel, CommentModel } from "../../../services/api/types";
import getCommentDTOList from "../utils/getCommentDTOList";

export const getComments = async (): Promise<CommentDTO[]> => {
  try {
    const [{ data: users }, { data: comments }] = await Promise.all([
      api.get<UserModel[]>("/users"),
      api.get<CommentModel[]>("/comments"),
    ]);

    return getCommentDTOList(users, comments);
  } catch (error: any) {
    if (isApiError(error)) {
      console.error(error.message);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }

    return [];
  }
};
