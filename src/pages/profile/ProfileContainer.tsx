import { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { addPost } from '../../redux/profile/actions'
import { ProfileST } from '../../redux/profile/reducer/types'
import { getUserProfile } from '../../redux/profile/thunks'
import { AppStateT } from '../../redux/store'
import { Profile } from './Profile'

type ProfileContainerPT = ProfileST & MapDispatchPT & RouteComponentProps<{ userId: string }>

class ProfileContainer extends Component<ProfileContainerPT> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = '29403'
    this.props.getUserProfile(userId)
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPT>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      let userId = '29403'
      this.props.getUserProfile(userId)
    }
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state: AppStateT): ProfileST => ({
  profile: state.profile.profile,
  posts: state.profile.posts,
  friends: state.profile.friends,
})

interface MapDispatchPT {
  addPost: (postText: string) => void
  getUserProfile: (userId: string) => void
}

const ProfileWithRouter = withRouter(ProfileContainer)

export default connect<ProfileST, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  addPost,
  getUserProfile,
})(ProfileWithRouter)
