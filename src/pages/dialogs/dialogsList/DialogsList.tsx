import { FC, memo } from 'react'

import { DialogsListItem } from './dialogsItemList/DialogsListItem'
import { S } from './DialogsList.styled'

import { DialogsListItemT } from '../../../redux/dialogs-reducer'

interface DialogsListPT {
  list: DialogsListItemT[]
}

export const DialogsList: FC<DialogsListPT> = memo(({ list }) => {
  const dialogsList = list.map((el) => <DialogsListItem key={el.id} id={el.id} name={el.name} />)
  return (
    <S.DialogsList>
      <S.List>{dialogsList}</S.List>
    </S.DialogsList>
  )
})
