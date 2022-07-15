import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  disabled?: boolean;
  size: "small" | "medium" | "large";
}
