import { FC } from 'react'
import Header from './layout/header/HeaderContainer'
import { Main } from './layout/main/Main'
import { Sidebar } from './layout/sidebar/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import { SideUsers } from './layout/sideUsers/SideUsers'
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
          <Route render={() => <Profile />} path={'/profile/:userId?'} />
          <Route render={() => <Dialogs />} path={'/dialogs'} />
          <Route render={() => <Users />} path={'/users'} />
        </Main>
      </C.FlexWrapper>
    </C.Container>
  </BrowserRouter>
)
