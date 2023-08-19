import { FC } from 'react'
import { Avatar } from '../../../components/avatar/Avatar'
import avatar from '../../../assets/images/anynft.webp'
import { S } from './DialogsList.styled'
import { C } from '../../../styles/Common.styled'

type DialogsListItemPT = {
  id: number
  name: string
}

export const DialogsListItem: FC<DialogsListItemPT> = ({ id, name }) => (
  <S.ItemLink to={`/dialogs/${id}`}>
    <C.FlexWrapper $align={'center'} $gap={'10px'}>
      <Avatar img={avatar} w={40} h={40} />
      <S.ItemText>{name}</S.ItemText>
    </C.FlexWrapper>
  </S.ItemLink>
)
