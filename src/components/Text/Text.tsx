import React from "react";

import { InternalText } from "./styles";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({ size, white, muted, bold, children }) => (
  <InternalText size={size} white={white} muted={muted} bold={bold}>
    {children}
  </InternalText>
);

export default Text;
