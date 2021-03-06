// Data Transfer Objects (objects used by the UI components to exhibit data)
export type UserDTO = {
  id: number;
  name: string;
};

export type CommentDTO = {
  userName: string;
  body: string;
};
