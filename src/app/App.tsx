import { Component } from 'react'
import { connect } from 'react-redux'
import { Preloader } from '../components/preloader/Preloader'
import Header from '../layout/header/HeaderContainer'
import { Main } from '../layout/main/Main'
import { Sidebar } from '../layout/sidebar/Sidebar'
import { initializeApp } from '../redux/app-reducer'
import { RootStateT } from '../redux/store'
import { C } from './styles/Common.styled'
import { AppRoutes } from './routes/AppRoutes'

interface AppPT {
  toggleTheme: () => void
}

class App extends Component<AppPT & MapStatePT & MapDispatchPT> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    let { isInitialized, toggleTheme } = this.props
    return isInitialized ? (
      <>
        <Header toggleTheme={toggleTheme} />
        <C.Container>
          <C.FlexWrapper $gap={'20px'}>
            <C.FlexWrapper $direction={'column'} $gap={'20px'}>
              <Sidebar />
            </C.FlexWrapper>
            <Main>
              <AppRoutes />
            </Main>
          </C.FlexWrapper>
        </C.Container>
      </>
    ) : (
      <Preloader size={200} />
    )
  }
}

interface MapStatePT {
  isInitialized: boolean
}

const mapStateToProps = (state: RootStateT): MapStatePT => ({
  isInitialized: state.app.isInitialized,
})

interface MapDispatchPT {
  initializeApp: () => void
}

export default connect<MapStatePT, MapDispatchPT, unknown, RootStateT>(mapStateToProps, {
  initializeApp,
})(App)
