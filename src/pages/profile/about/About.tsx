import { FC } from 'react'
import { TitleBlock } from '../../../components/titleBlock/TitleBlock'
import { C } from '../../../app/styles/Common.styled'

type AboutPT = {
  about: string | null
}

export const About: FC<AboutPT> = ({ about }) => (
  <C.ShadowContainer>
    <TitleBlock title={'About me'} />
    <C.Text>{about || 'User dont add this info'}</C.Text>
  </C.ShadowContainer>
)
