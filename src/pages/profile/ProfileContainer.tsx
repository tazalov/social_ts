import { Component, ComponentType } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { AuthST } from '../../redux/auth/reducer/types'
import { addPost } from '../../redux/profile/actions'
import { ProfileST } from '../../redux/profile/reducer/types'
import { getStatusProfile, getUserProfile } from '../../redux/profile/thunks'
import { AppStateT } from '../../redux/store'
import { redirectToLogin } from '../../utils/hoc/redirectToLogin'
import { Profile } from './Profile'

type ProfileContainerPT = MapStatePT & MapDispatchPT & RouteComponentProps<{ userId: string }>

class ProfileContainer extends Component<ProfileContainerPT> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = `${this.props.id}`
    this.props.getUserProfile(userId)
    this.props.getStatusProfile(userId)
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPT>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      let userId = `${this.props.id}`
      this.props.getUserProfile(userId)
      this.props.getStatusProfile(userId)
    }
  }

  render() {
    return <Profile {...this.props} />
  }
}

type MapStatePT = ProfileST & Pick<AuthST, 'id'>

const mapStateToProps = (state: AppStateT): MapStatePT => ({
  profile: state.profile.profile,
  posts: state.profile.posts,
  friends: state.profile.friends,
  status: state.profile.status,
  id: state.auth.id,
})

interface MapDispatchPT {
  addPost: (postText: string) => void
  getUserProfile: (userId: string) => void
  getStatusProfile: (userId: string) => void
}

export default compose<ComponentType>(
  connect<MapStatePT, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
    addPost,
    getUserProfile,
    getStatusProfile,
  }),
  withRouter,
  redirectToLogin,
)(ProfileContainer)
