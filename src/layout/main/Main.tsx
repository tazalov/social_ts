import { FC, ReactNode } from 'react'

import { S } from './Main.styled'

type MainPT = {
  children: ReactNode
}

export const Main: FC<MainPT> = ({ children }) => <S.Main>{children}</S.Main>
