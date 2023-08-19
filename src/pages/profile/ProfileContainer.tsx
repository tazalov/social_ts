import { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { profileAPI } from '../../api/api'
import { addPost, InitialStateT, ProfileT, setProfile } from '../../redux/profile.reducer'
import { AppStateT } from '../../redux/store'
import { Profile } from './Profile'

type ProfileContainerPT = InitialStateT & MapDispatchPT & RouteComponentProps<{ userId: string }>

class ProfileContainer extends Component<ProfileContainerPT> {
  getProfileInfo(userId: string) {
    profileAPI.getProfile(userId).then(data => {
      this.props.setProfile(data)
    })
  }
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = '29403'
    this.getProfileInfo(userId)
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPT>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      let userId = '29403'
      this.getProfileInfo(userId)
    }
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  profile: state.profile.profile,
  posts: state.profile.posts,
  friends: state.profile.friends,
})

type MapDispatchPT = {
  addPost: (postText: string) => void
  setProfile: (profile: ProfileT) => void
}

const ProfileWithRouter = withRouter(ProfileContainer)

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  addPost,
  setProfile,
})(ProfileWithRouter)
