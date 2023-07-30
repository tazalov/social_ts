import { connect } from "react-redux";
import { AppStateT } from "../../redux/store";
import {
  addPostAC,
  InitialStateT,
  ProfileAT,
} from "../../redux/profile.reducer";
import { Dispatch } from "redux";
import { Profile } from "./Profile";

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  posts: state.profile.posts,
  friends: state.profile.friends,
});

type MapDispatchPT = {
  addPost: (postText: string) => void;
};

const mapDispatchToProps = (dispatch: Dispatch<ProfileAT>) => ({
  addPost: (postText: string) => dispatch(addPostAC(postText)),
});

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
