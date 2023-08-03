import { User } from "./User";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import styled from "styled-components";
import { UserT } from "../../redux/users.reducer";
import axios from "axios";
import { Component } from "react";
import { Pagination } from "../../components/pagination/Pagination";

type UsersPT = {
  list: UserT[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[], count: number) => void;
  setCurrentPage: (page: number) => void;
};

export class UsersC extends Component<UsersPT> {
  componentDidMount() {
    const { list, pageSize, currentPage, setUsers } = this.props;
    if (!list.length) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        )
        .then((response) =>
          setUsers(response.data.items, response.data.totalCount),
        );
    }
  }
  componentDidUpdate(prevProps: Readonly<UsersPT>) {
    const { pageSize, currentPage, setUsers } = this.props;
    if (currentPage !== prevProps.currentPage) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        )
        .then((response) =>
          setUsers(response.data.items, response.data.totalCount),
        );
    }
  }

  render() {
    let {
      list,
      totalCount,
      pageSize,
      currentPage,
      follow,
      unfollow,
      setCurrentPage,
    } = this.props;
    return (
      <>
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          totalCount={totalCount}
          setPage={setCurrentPage}
        />
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
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
