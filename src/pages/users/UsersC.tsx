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
  getUsersC = () => {
    if (!this.props.list.length) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => this.props.setUsers(response.data.items));
    }
  };
  render() {
    let { list, follow, unfollow } = this.props;
    return (
      <StyledUsers>
        <button onClick={this.getUsersC}>getUsers</button>
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
}

const StyledUsers = styled(ShadowContainerStyled)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
