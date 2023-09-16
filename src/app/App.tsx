import { FC } from 'react'
import Header from '../layout/header/HeaderContainer'
import { Main } from '../layout/main/Main'
import { Sidebar } from '../layout/sidebar/Sidebar'
import { SideUsers } from '../layout/sideUsers/SideUsers'
import { AppStateT } from '../redux/store'
import { C } from '../styles/Common.styled'
import { AppRoutes } from './routes/AppRoutes'

type AppPT = {
  state: AppStateT
  toggleTheme: () => void
}

export const App: FC<AppPT> = ({ state, toggleTheme }) => (
  <>
    <Header toggleTheme={toggleTheme} />
    <C.Container>
      <C.FlexWrapper $gap={'20px'}>
        <C.FlexWrapper $direction={'column'} $gap={'20px'}>
          <Sidebar />
          <SideUsers sideUsers={state.sideUsers} />
        </C.FlexWrapper>
        <Main>
          <AppRoutes />
        </Main>
      </C.FlexWrapper>
    </C.Container>
  </>
)
