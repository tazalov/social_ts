import { connect } from "react-redux";
import { AppStateT } from "../../redux/store";
import {
  addPost,
  InitialStateT,
  ProfileT,
  setProfile,
} from "../../redux/profile.reducer";
import { Profile } from "./Profile";
import React, { Component } from "react";
import axios from "axios";

class ProfileContainer extends Component<InitialStateT & MapDispatchPT> {
  componentDidMount() {
    let userId = this.props.profile?.userId;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  profile: state.profile.profile,
  posts: state.profile.posts,
  friends: state.profile.friends,
});

type MapDispatchPT = {
  addPost: (postText: string) => void;
  setProfile: (profile: ProfileT) => void;
};

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  { addPost, setProfile },
)(ProfileContainer);
