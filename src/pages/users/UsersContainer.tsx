import { connect } from "react-redux";
import { Users } from "./Users";
import {
  followAC,
  InitialStateT,
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
});

type MapDispatchPT = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[]) => void;
};

const mapDispatchToProps = (dispatch: Dispatch<UsersAT>) => ({
  follow: (id: number) => dispatch(followAC(id)),
  unfollow: (id: number) => dispatch(unfollowAC(id)),
  setUsers: (users: UserT[]) => dispatch(setUsersAC(users)),
});

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  mapDispatchToProps,
)(UsersC);
