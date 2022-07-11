import { PropsWithChildren } from "react";

export type TextProps = PropsWithChildren<{
  color?: string;
  size?: number | string;
  muted?: boolean;
  bold?: boolean;
  white?: boolean;
}>;
