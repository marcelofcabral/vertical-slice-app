import styled from "styled-components";

import Text from "../../../../../components/Text";

export const UserNameText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CommentText = Text;
