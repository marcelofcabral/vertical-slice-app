import styled from "styled-components";

import Text from "../../../../../components/Text";

export const Container = styled.div``;

export const UserNameText = styled(Text).attrs(({ theme }) => ({
  color: theme.colors.primary,
}))``;

export const CommentText = Text;
