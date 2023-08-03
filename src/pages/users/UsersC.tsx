import { User } from "./User";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import styled from "styled-components";
import { UserT } from "../../redux/users.reducer";
import axios from "axios";
import { Component } from "react";

type UsersPT = {
  list: UserT[];
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[]) => void;
};

export class UsersC extends Component<UsersPT> {
  componentDidMount() {
    const { list, setUsers } = this.props;
    if (!list.length) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => setUsers(response.data.items));
    }
  }
  render() {
    let { list, follow, unfollow } = this.props;
    return (
      <>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
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
      </>
    );
  }
}

const StyledUsers = styled(ShadowContainerStyled)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
