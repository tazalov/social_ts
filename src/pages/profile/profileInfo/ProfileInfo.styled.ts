import styled from "styled-components";
import { C } from "../../../components/Common.styled";

const ProfileInfoStyled = styled(C.FlexWrapper)`
  padding: 10px 10px 10px 160px;
  position: relative;
`;

const Avatar = styled.div`
  position: absolute;
  margin-top: -80px;
  left: 10px;
  top: 0;
  border: 5px solid ${(props) => props.theme.colors.secondaryBg};
  border-radius: 50%;
`;

const Info = styled(C.FlexWrapper)`
  margin-left: 20px;
`;

const Name = styled(C.FlexWrapper)`
  font-size: 25px;
  p {
    text-transform: uppercase;
  }
  span {
    font-size: 14px;
    padding: 5px;
    background-color: ${(props) => props.theme.colors.primaryBg};
  }
`;

const Status = styled.div`
  color: ${(props) => props.theme.colors.secondaryFont};
`;

const Looking = styled.div`
  text-align: left;
  span {
    font-size: 18px;
    padding: 5px;
  }
`;

const Buttons = styled(C.FlexWrapper)`
  padding: 0 10px;
`;

export const S = {
  ProfileInfo: ProfileInfoStyled,
  Avatar,
  Info,
  Name,
  Status,
  Looking,
  Buttons,
};
