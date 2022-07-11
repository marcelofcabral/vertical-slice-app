// existing app routes
export type RoutePaths = "/" | "/product" | "/denouncement" | "/contactus" | "/gdpr" | "/order" | "/order/conclusion";

// existing API routes
export type APIRoutes = "/users" | "/comments";

// Data Transfer Objects (objects used by the UI components to exhibit data)
export type UserDTO = {
  id: number;
  name: string;
};

export type CommentDTO = {
  userName: string;
  body: string;
};
