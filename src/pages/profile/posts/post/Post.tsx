import { Avatar } from "../../../../components/avatar/Avatar";
import avatar from "../../../../assets/images/anynft.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { S } from "./Post.styled";
import { C } from "../../../../components/Common.styled";

type PostPT = {
  id: number;
  name: string;
  message: string;
  likes: number;
};

export function Post({ name, message, likes }: PostPT) {
  return (
    <C.ShadowContainer>
      <S.Post>
        <C.FlexWrapper align={"center"}>
          <Avatar img={avatar} w={50} h={50} />
          <S.UserInfo gap={"10px"} justify={"space-between"}>
            <span>{name}</span>
            <i>12/04/2022</i>
          </S.UserInfo>
        </C.FlexWrapper>
        <S.PostText>{message}</S.PostText>
        <S.PostButtons gap={"10px"} justify={"space-between"}>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likes}</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </S.PostButtons>
      </S.Post>
    </C.ShadowContainer>
  );
}
