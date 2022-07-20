// database types (or JS object representations of data received from the database)
export type UserModel = {
  id: number;
  name: string;
};

export type CommentModel = {
  id: number;
  userId: number;
  body: string;
};

// existing API routes
export type APIRoutes = "/users" | "/comments";
