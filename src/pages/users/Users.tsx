import { User } from "./User";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import styled from "styled-components";
import { UserT } from "../../redux/users.reducer";

type UsersPT = {
  list: UserT[];
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

export function Users({ list, follow, unfollow }: UsersPT) {
  console.log("rerender");
  return (
    <StyledUsers>
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
