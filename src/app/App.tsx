import { Component } from 'react'
import { connect } from 'react-redux'

import { AppRoutes } from './routes/AppRoutes'

import { C } from './styles/Common.styled'

import { Preloader } from '../components'
import { Header, Main, Sidebar } from '../layout'
import { initializeApp } from '../redux/app-reducer'
import { RootStateT } from '../redux/store'

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
