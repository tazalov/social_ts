import { FC } from 'react'

import avatar from '../../../../app/assets/images/anynft.webp'
import { C } from '../../../../app/styles/Common.styled'
import { Avatar } from '../../../../components'
import { S } from '../DialogsList.styled'

interface DialogsListItemPT {
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
