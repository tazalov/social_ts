import styled from "styled-components";
import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/carrepair.webp";
import { theme } from "../../../styles/Theme";

type FriendPT = {
  name: string;
};

export function Friend({ name }: FriendPT) {
  return (
    <StyledFriend>
      <Avatar img={avatar} w={80} h={80} />
      <Name>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</Name>
    </StyledFriend>
  );
}

const StyledFriend = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const Name = styled.div`
  margin: 10px 0 0 0;
  color: white;
  text-align: center;
`;
