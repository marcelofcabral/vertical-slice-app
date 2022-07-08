import { PropsWithChildren } from "react";

export type TextProps = PropsWithChildren<{
  size?: number | string;
  muted?: boolean;
  bold?: boolean;
  white?: boolean;
}>;
