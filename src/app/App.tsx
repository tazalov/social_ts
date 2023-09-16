import { FC } from 'react'
import Header from '../layout/header/HeaderContainer'
import { Main } from '../layout/main/Main'
import { Sidebar } from '../layout/sidebar/Sidebar'
import { C } from './styles/Common.styled'
import { AppRoutes } from './routes/AppRoutes'

type AppPT = {
  toggleTheme: () => void
}

export const App: FC<AppPT> = ({ toggleTheme }) => (
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
)
