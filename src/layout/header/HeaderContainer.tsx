import { Component } from 'react'
import { connect } from 'react-redux'
import { AuthST } from '../../redux/auth/reducer/types'
import { getUserData } from '../../redux/auth/thunks'
import { AppStateT } from '../../redux/store'
import { Header } from './Header'

interface OwnPT {
  toggleTheme: () => void
}

type HeaderContainerPT = OwnPT & AuthST & MapDispatchPT

class HeaderContainer extends Component<HeaderContainerPT> {
  componentDidMount() {
    this.props.getUserData()
  }

  render() {
    const { isAuth, login, toggleTheme } = this.props
    return <Header isAuth={isAuth} login={login} toggleTheme={toggleTheme} />
  }
}

const mapStateToProps = (state: AppStateT): AuthST => ({
  id: state.auth.id,
  login: state.auth.login,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
})

interface MapDispatchPT {
  getUserData: () => void
}

export default connect<AuthST, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  getUserData,
})(HeaderContainer)
