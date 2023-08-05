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
import { RouteComponentProps, withRouter } from "react-router-dom";

type ProfileContainerPT = InitialStateT &
  MapDispatchPT &
  RouteComponentProps<{ userId: string }>;

class ProfileContainer extends Component<ProfileContainerPT> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = "29403";
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPT>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      let userId = "29403";
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
          this.props.setProfile(response.data);
        });
    }
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

const ProfileWithRouter = withRouter(ProfileContainer);

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  { addPost, setProfile },
)(ProfileWithRouter);
