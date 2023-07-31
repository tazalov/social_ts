import { User } from "./User";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import styled from "styled-components";
import { UserT } from "../../redux/users.reducer";
import axios from "axios";

type UsersPT = {
  list: UserT[];
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[]) => void;
};

export function Users({ list, follow, unfollow, setUsers }: UsersPT) {
  const getUsers = () => {
    if (!list.length) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => setUsers(response.data.items));
    }
  };
  return (
    <StyledUsers>
      <button onClick={getUsers}>getUsers</button>
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
    </StyledUsers>
  );
}

const StyledUsers = styled(ShadowContainerStyled)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
