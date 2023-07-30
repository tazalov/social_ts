import { connect } from "react-redux";
import { Users } from "./Users";
import {
  followAC,
  InitialStateT,
  unfollowAC,
  UsersAT,
} from "../../redux/users.reducer";
import { AppStateT } from "../../redux/store";
import { Dispatch } from "redux";

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  list: state.users.list,
});

type MapDispatchPT = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

const mapDispatchToProps = (dispatch: Dispatch<UsersAT>) => ({
  follow: (id: number) => dispatch(followAC(id)),
  unfollow: (id: number) => dispatch(unfollowAC(id)),
});

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
