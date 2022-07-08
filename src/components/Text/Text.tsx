import React from "react";

import { InternalText } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({ size, white, muted, bold, children }) => (
  <InternalText size={size} white={white} muted={muted} bold={bold}>
    {children}
  </InternalText>
);

export default Text;
