import { Friend } from "./Friend";
import { TitleBlock } from "../../../components/titleBlock/TitleBlock";
import { FriendsT } from "../../../redux/profile.reducer";
import { S } from "./Friends.styled";

type FriendsPT = {
  friends: FriendsT;
};

export function Friends({ friends }: FriendsPT) {
  return (
    <S.Friends>
      <TitleBlock
        title={
          <>
            Friends <span>{friends.count}</span>
          </>
        }
      />
      <S.List>
        {friends.list.map((el) => (
          <Friend key={el.id} name={el.name} />
        ))}
      </S.List>
    </S.Friends>
  );
}
