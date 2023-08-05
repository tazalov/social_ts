import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { C } from "../../components/Common.styled";

const UserList = styled.ul``;

const User = styled(C.FlexWrapper)`
  padding: 10px;
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const Info = styled(C.FlexWrapper)`
  user-select: none;
`;

export const S = {
  UserList,
  User,
  Info,
};
