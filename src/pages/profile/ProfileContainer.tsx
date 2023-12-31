import { Component, ComponentType } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { Profile } from './Profile'

import { Preloader } from '../../components'
import { AppST } from '../../redux/app-reducer'
import {
  addPost,
  getFriendsProfile,
  getStatusProfile,
  getUserProfile,
  ProfileST,
  ProfileT,
} from '../../redux/profile-reducer'
import { updatePhotoProfile, updateProfile } from '../../redux/profile-reducer/model/thunks/profile.thunks'
import { RootStateT } from '../../redux/store'
import { redirectToLogin } from '../../utils/hoc/redirectToLogin'

type ProfileContainerPT = MapStatePT & MapDispatchPT & RouteComponentProps<{ userId: string }>

class ProfileContainer extends Component<ProfileContainerPT> {
  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) userId = `${this.props.id}`
    this.props.getFriendsProfile()
    this.props.getUserProfile(userId)
    this.props.getStatusProfile(userId)
  }

  componentDidMount() {
    this.refreshProfile()
    document.title = 'Profile'
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPT>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    const { isProfileLoading, profile, posts, friends, errorUpdate, addPost, updatePhotoProfile, updateProfile } =
      this.props
    return isProfileLoading || !profile ? (
      <Preloader size={150} />
    ) : (
      <Profile
        profile={profile}
        posts={posts}
        friends={friends}
        isOwner={!this.props.match.params.userId}
        errorUpdate={errorUpdate}
        addPost={addPost}
        updatePhoto={updatePhotoProfile}
        updateProfile={updateProfile}
      />
    )
  }
}

type MapStatePT = Omit<ProfileST, 'status'> & Pick<AppST, 'id'>

const mapStateToProps = (state: RootStateT): MapStatePT => ({
  profile: state.profile.profile,
  posts: state.profile.posts,
  friends: state.profile.friends,
  isProfileLoading: state.profile.isProfileLoading,
  errorUpdate: state.profile.errorUpdate,
  id: state.app.id,
})

interface MapDispatchPT {
  addPost: (postText: string) => void
  getUserProfile: (userId: string) => void
  getStatusProfile: (userId: string) => void
  getFriendsProfile: () => void
  updatePhotoProfile: (photo: File) => void
  updateProfile: (profile: Omit<ProfileT, 'photos'>) => void
}

export default compose<ComponentType>(
  connect<MapStatePT, MapDispatchPT, unknown, RootStateT>(mapStateToProps, {
    addPost,
    getUserProfile,
    getStatusProfile,
    getFriendsProfile,
    updatePhotoProfile,
    updateProfile,
  }),
  withRouter,
  redirectToLogin,
)(ProfileContainer)
