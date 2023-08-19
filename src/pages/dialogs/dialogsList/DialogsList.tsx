import { FC } from 'react'
import { DialogsListItemT } from '../../../redux/dialogs.reducer'
import { S } from './DialogsList.styled'
import { DialogsListItem } from './DialogsListItem'

type DialogsListPT = {
  list: DialogsListItemT[]
}

export const DialogsList: FC<DialogsListPT> = ({ list }) => (
  <S.DialogsList>
    <S.List>
      {list.map(el => (
        <DialogsListItem key={el.id} id={el.id} name={el.name} />
      ))}
    </S.List>
  </S.DialogsList>
)
