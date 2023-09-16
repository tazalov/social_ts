import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { C } from '../../app/styles/Common.styled'
import { F } from '../../app/styles/Fragments.styled'
import { ButtonB } from '../button/ButtonB'

type TitleBlockPT = {
  title: string | ReactNode
  noBtn?: boolean
  centered?: boolean
}

export const TitleBlock: FC<TitleBlockPT> = ({ title, noBtn, centered = false }) => (
  <TitleWrapper $justify={centered ? 'center' : 'space-between'} $align={'center'}>
    <Title>{title}</Title>
    {noBtn || <ButtonB title={<FontAwesomeIcon icon={faAnglesRight} />} callback={() => {}} />}
  </TitleWrapper>
)

const TitleWrapper = styled(C.FlexWrapper)`
  background-color: ${props => props.theme.colors.thirdBg};
  padding: 15px 20px;
`

const Title = styled.h2`
  ${F.Subtitle};
  span {
    color: ${props => props.theme.colors.secondaryFont};
    font-size: 14px;
    padding: 5px;
  }
`
