import { FC } from 'react'
import { TextForm } from '../../../components/textForm/textForm'
import { C } from '../../../app/styles/Common.styled'
import { PostT } from '../../../redux/profile-reducer'
import { Post } from './post/Post'
import { S } from './Posts.styled'

interface PostsPT {
  posts: PostT[]
  addPost: (postText: string) => void
}

export const Posts: FC<PostsPT> = ({ posts, addPost }) => (
  <S.Posts $direction={'column'} $gap={'20px'}>
    <C.ShadowContainer as={S.FormWrapper}>
      <TextForm placeholder={'Enter post message...'} callback={addPost} />
    </C.ShadowContainer>
    {posts.map(el => (
      <Post key={el.id} id={el.id} name={el.user} message={el.text} likes={el.likes} />
    ))}
  </S.Posts>
)
