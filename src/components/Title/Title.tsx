import React from "react";

import { Text } from "./styles";
import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = ({ children, white }) => <Text white={white}>{children}</Text>;

export default Title;
