import { FC } from 'react'
import { DialogsListItemT } from '../../../redux/dialogs-reducer'
import { S } from './DialogsList.styled'
import { DialogsListItem } from './DialogsListItem'

interface DialogsListPT {
  list: DialogsListItemT[]
}

export const DialogsList: FC<DialogsListPT> = ({ list }) => {
  const dialogsList = list.map(el => <DialogsListItem key={el.id} id={el.id} name={el.name} />)
  return (
    <S.DialogsList>
      <S.List>{dialogsList}</S.List>
    </S.DialogsList>
  )
}
