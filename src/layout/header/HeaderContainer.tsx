import { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from './Header'

import { logoutUser } from '../../redux/app-reducer'
import { RootStateT } from '../../redux/store'

interface OwnPT {
  toggleTheme: () => void
}

type HeaderContainerPT = OwnPT & MapStatePT & MapDispatchPT

class HeaderContainer extends Component<HeaderContainerPT> {
  render() {
    const { isAuth, login, toggleTheme } = this.props
    return <Header isAuth={isAuth} login={login} toggleTheme={toggleTheme} logout={this.props.logoutUser} />
  }
}

type MapStatePT = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

const mapStateToProps = (state: RootStateT): MapStatePT => ({
  id: state.app.id,
  login: state.app.login,
  email: state.app.email,
  isAuth: state.app.isAuth,
})

interface MapDispatchPT {
  logoutUser: () => void
}

export default connect<MapStatePT, MapDispatchPT, unknown, RootStateT>(mapStateToProps, {
  logoutUser,
})(HeaderContainer)
