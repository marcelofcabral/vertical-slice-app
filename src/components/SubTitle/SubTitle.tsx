import React from "react";

import { Text } from "./styles";
import { SubTitleProps } from "./types";

const SubTitle: React.FC<SubTitleProps> = ({ children, white }) => <Text white={white}>{children}</Text>;

export default SubTitle;
