import { User } from "./User";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import styled from "styled-components";
import { UserT } from "../../redux/users.reducer";

type UsersPT = {
  list: UserT[];
};

export function Users({ list }: UsersPT) {
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
        />
      ))}
    </StyledUsers>
  );
}

const StyledUsers = styled(ShadowContainerStyled)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
