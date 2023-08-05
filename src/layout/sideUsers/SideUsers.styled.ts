import styled from "styled-components";
import { FlexWrapperStyled } from "../../components/FlexWrapper.styled";
import { theme } from "../../styles/Theme";

const UserList = styled.ul``;

const User = styled(FlexWrapperStyled)`
  padding: 10px;
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const Info = styled(FlexWrapperStyled)`
  user-select: none;
`;

export const S = {
  UserList,
  User,
  Info,
};
