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
import { UsersC } from "./UsersC";

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
