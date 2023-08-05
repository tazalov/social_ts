import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { F } from "../../../components/Fragments.styled";
import { C } from "../../../components/Common.styled";

const User = styled(C.FlexWrapper)`
  padding: 10px;
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const Name = styled.div`
  ${F.Subtitle};
  font-size: 22px;
`;

const Status = styled.div`
  color: ${theme.colors.secondaryFont};
  font-size: 14px;
`;

export const S = {
  User,
  Name,
  Status,
};
