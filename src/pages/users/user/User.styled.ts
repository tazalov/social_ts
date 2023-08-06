import styled from "styled-components";
import { F } from "../../../components/Fragments.styled";
import { C } from "../../../components/Common.styled";

const User = styled(C.FlexWrapper)`
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.thirdBg};
  }
`;

const Name = styled.div`
  ${F.Subtitle};
  font-size: 22px;
`;

const Status = styled.div`
  color: ${(props) => props.theme.colors.secondaryFont};
  font-size: 14px;
`;

export const S = {
  User,
  Name,
  Status,
};
