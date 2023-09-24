import { FC, memo } from 'react'
import { TextForm } from '../../../components'
import { C } from '../../../app/styles/Common.styled'
import { PostT } from '../../../redux/profile-reducer'
import { Post } from './post/Post'
import { S } from './Posts.styled'

interface PostsPT {
  posts: PostT[]
  addPost: (postText: string) => void
}

export const Posts: FC<PostsPT> = memo(({ posts, addPost }) => {
  return (
    <S.Posts $direction={'column'} $gap={'20px'}>
      <C.ShadowContainer as={S.FormWrapper}>
        <TextForm placeholder={'Enter post message...'} callback={addPost} />
      </C.ShadowContainer>
      {posts.map(el => (
        <Post key={el.id} post={el} />
      ))}
    </S.Posts>
  )
})
