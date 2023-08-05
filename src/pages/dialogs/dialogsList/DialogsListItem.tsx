import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/anynft.webp";
import { S } from "./DialogsList.styled";
import { C } from "../../../components/Common.styled";

type DialogsListItemPT = {
  id: number;
  name: string;
};

export function DialogsListItem({ id, name }: DialogsListItemPT) {
  return (
    <S.ItemLink to={`/dialogs/${id}`}>
      <C.FlexWrapper align={"center"} gap={"10px"}>
        <Avatar img={avatar} w={40} h={40} />
        <S.ItemText>{name}</S.ItemText>
      </C.FlexWrapper>
    </S.ItemLink>
  );
}
