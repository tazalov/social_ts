import { connect } from "react-redux";
import { Users } from "./Users";
import {
  followAC,
  InitialStateT,
  setCurrentPageAC,
  setUsersAC,
  unfollowAC,
  UsersAT,
  UserT,
} from "../../redux/users.reducer";
import { AppStateT } from "../../redux/store";
import { Dispatch } from "redux";
import { Component } from "react";
import axios from "axios";
import { Pagination2 } from "../../components/pagination/Pagination2";

type UsersCPT = {
  list: UserT[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[], count: number) => void;
  setCurrentPage: (page: number) => void;
};

class UsersC extends Component<UsersCPT> {
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
  componentDidUpdate(prevProps: Readonly<UsersCPT>) {
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
        <Pagination2
          pageSize={pageSize}
          currentPage={currentPage}
          totalCount={totalCount}
          setPage={setCurrentPage}
        />
        <Users list={list} follow={follow} unfollow={unfollow} />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  list: state.users.list,
  totalCount: state.users.totalCount,
  pageSize: state.users.pageSize,
  currentPage: state.users.currentPage,
});

type MapDispatchPT = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[], count: number) => void;
  setCurrentPage: (page: number) => void;
};

const mapDispatchToProps = (dispatch: Dispatch<UsersAT>) => ({
  follow: (id: number) => dispatch(followAC(id)),
  unfollow: (id: number) => dispatch(unfollowAC(id)),
  setUsers: (users: UserT[], count: number) =>
    dispatch(setUsersAC(users, count)),
  setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
});

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  mapDispatchToProps,
)(UsersC);
