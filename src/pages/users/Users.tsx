import { User } from "./user/User";
import { UserT } from "../../redux/users.reducer";
import { S } from "./Users.styled";

type UsersPT = {
  list: UserT[];
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

export function Users({ list, follow, unfollow }: UsersPT) {
  return (
    <S.Users>
      {list.map((el) => (
        <User
          key={el.id}
          id={el.id}
          name={el.name}
          followed={el.followed}
          avatarUrl={el.photos.small}
          status={el.status}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </S.Users>
  );
}
