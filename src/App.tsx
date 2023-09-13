import { FC } from 'react'
import Header from './layout/header/HeaderContainer'
import { Main } from './layout/main/Main'
import { Sidebar } from './layout/sidebar/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import { SideUsers } from './layout/sideUsers/SideUsers'
import { Login } from './pages/login/Login'
import { AppStateT } from './redux/store'
import Dialogs from './pages/dialogs/DialogsContainer'
import Profile from './pages/profile/ProfileContainer'
import Users from './pages/users/UsersContainer'
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
          <Route exact render={() => <Profile />} path={'/'} />
          <Route render={() => <Profile />} path={'/profile/:userId?'} />
          <Route render={() => <Dialogs />} path={'/dialogs'} />
          <Route render={() => <Users />} path={'/users'} />
          <Route render={() => <Login />} path={'/login'} />
        </Main>
      </C.FlexWrapper>
    </C.Container>
  </BrowserRouter>
)
