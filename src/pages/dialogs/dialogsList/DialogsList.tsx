import { DialogsListItem } from "./DialogsListItem";
import { DialogsListItemT } from "../../../redux/dialogs.reducer";
import { S } from "./DialogsList.styled";

type DialogsListPT = {
  list: DialogsListItemT[];
};

export function DialogsList({ list }: DialogsListPT) {
  return (
    <S.DialogsList>
      <S.List>
        {list.map((el) => (
          <DialogsListItem key={el.id} id={el.id} name={el.name} />
        ))}
      </S.List>
    </S.DialogsList>
  );
}
