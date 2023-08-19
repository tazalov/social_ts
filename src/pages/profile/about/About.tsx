import { FC } from 'react'
import { TitleBlock } from '../../../components/titleBlock/TitleBlock'
import { C } from '../../../styles/Common.styled'
import { S } from './About.styled'

type AboutPT = {
  about: string | null
}

export const About: FC<AboutPT> = ({ about }) => (
  <C.ShadowContainer>
    <TitleBlock title={'About me'} noBtn />
    <S.Text>{about || 'User dont add this info'}</S.Text>
  </C.ShadowContainer>
)
