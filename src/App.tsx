import { FC } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import Header from './layout/header/HeaderContainer'
import { Main } from './layout/main/Main'
import { Sidebar } from './layout/sidebar/Sidebar'
import { SideUsers } from './layout/sideUsers/SideUsers'
import Dialogs from './pages/dialogs/DialogsContainer'
import { Login } from './pages/login/Login'
import Profile from './pages/profile/ProfileContainer'
import Users from './pages/users/UsersContainer'
import { AppStateT } from './redux/store'
import { C } from './styles/Common.styled'

type AppPT = {
  state: AppStateT
  toggleTheme: () => void
}

export const App: FC<AppPT> = ({ state, toggleTheme }) => (
  <BrowserRouter>
    <Header toggleTheme={toggleTheme} />
    <C.Container>
      <C.FlexWrapper $gap={'20px'}>
        <C.FlexWrapper $direction={'column'} $gap={'20px'}>
          <Sidebar />
          <SideUsers sideUsers={state.sideUsers} />
        </C.FlexWrapper>
        <Main>
          <Route exact path={'/'} render={() => <Redirect to={'/profile'} />} />
          <Route path={'/profile/:userId?'} render={() => <Profile />} />
          <Route path={'/dialogs'} render={() => <Dialogs />} />
          <Route path={'/users'} render={() => <Users />} />
          <Route path={'/login'} render={() => <Login />} />
        </Main>
      </C.FlexWrapper>
    </C.Container>
  </BrowserRouter>
)
