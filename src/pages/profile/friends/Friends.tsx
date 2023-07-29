import { FriendsT } from "../../../redux/_store";
import styled from "styled-components";
import { Friend } from "./Friend";
import { ShadowContainer } from "../../../components/ShadowContainer";
import { TitleBlock } from "../../../components/titleBlock/TitleBlock";

type FriendsPT = {
  friends: FriendsT;
};

export function Friends({ friends }: FriendsPT) {
  return (
    <StyledFriends>
      <TitleBlock
        title={
          <>
            Friends <span>{friends.count}</span>
          </>
        }
      />
      <List>
        {friends.list.map((el) => (
          <Friend key={el.id} name={el.name} />
        ))}
      </List>
    </StyledFriends>
  );
}

const StyledFriends = styled(ShadowContainer)`
  height: min-content;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
`;
