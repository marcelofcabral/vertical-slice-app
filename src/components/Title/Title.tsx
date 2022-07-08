import React from "react";

import { Text } from "./Title.styles";
import { TitleProps } from "./Title.types";

const Title: React.FC<TitleProps> = ({ children, white }) => <Text white={white}>{children}</Text>;

export default Title;
