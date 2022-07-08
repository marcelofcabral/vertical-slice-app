import React from "react";

import { Text } from "./SubTitle.styles";
import { SubTitleProps } from "./SubTitle.types";

const SubTitle: React.FC<SubTitleProps> = ({ children, white }) => <Text white={white}>{children}</Text>;

export default SubTitle;
