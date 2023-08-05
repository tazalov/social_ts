import { Post } from "./post/Post";
import { TextForm } from "../../../components/textForm/textForm";
import { PostT } from "../../../redux/profile.reducer";
import { S } from "./Posts.styled";
import { C } from "../../../components/Common.styled";

type PostsPT = {
  posts: PostT[];
  addPost: (postText: string) => void;
};

export function Posts({ posts, addPost }: PostsPT) {
  return (
    <S.Posts direction={"column"} gap={"20px"}>
      <C.ShadowContainer as={S.FormWrapper}>
        <TextForm place={"Enter post message..."} callback={addPost} />
      </C.ShadowContainer>
      {posts.map((el) => (
        <Post
          key={el.id}
          id={el.id}
          name={el.user}
          message={el.text}
          likes={el.likes}
        />
      ))}
    </S.Posts>
  );
}
