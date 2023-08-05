import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { F } from "../../../../components/Fragments.styled";
import { C } from "../../../../components/Common.styled";

const Post = styled.div`
  padding: 10px;
`;

const UserInfo = styled(C.FlexWrapper)`
  width: 100%;
  margin-left: 10px;
  span {
    ${F.Subtitle};
  }
  i {
    color: ${theme.colors.secondaryFont};
    font-size: 10px;
  }
`;

const PostText = styled.div`
  margin: 10px 0;
  padding: 20px 10px;
  background-color: ${theme.colors.thirdBg};
`;

const PostButtons = styled(C.FlexWrapper)`
  button {
    padding: 5px;
    color: ${theme.colors.secondaryFont};
    font-size: 14px;
    &:hover {
      color: ${theme.colors.primaryFont};
    }
    span {
      margin-left: 5px;
    }
  }
`;

export const S = {
  Post,
  UserInfo,
  PostText,
  PostButtons,
};
