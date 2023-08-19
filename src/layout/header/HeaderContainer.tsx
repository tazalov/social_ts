import axios from 'axios'
import { Component } from 'react'
import { connect } from 'react-redux'
import { InitialStateT, setUserData } from '../../redux/auth.reducer'
import { AppStateT } from '../../redux/store'
import { Header } from './Header'

type OwnPT = {
  toggleTheme: () => void
}

type HeaderContainerPT = OwnPT & InitialStateT & MapDispatchPT

class HeaderContainer extends Component<HeaderContainerPT> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data
          this.props.setUserData(id, login, email, true)
        } else {
          this.props.setUserData(null, null, null, false)
        }
      })
  }

  render() {
    const { isAuth, login, toggleTheme } = this.props
    return <Header isAuth={isAuth} login={login} toggleTheme={toggleTheme} />
  }
}

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  id: state.auth.id,
  login: state.auth.login,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
})

type MapDispatchPT = {
  setUserData: (
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
  ) => void
}

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  setUserData,
})(HeaderContainer)
