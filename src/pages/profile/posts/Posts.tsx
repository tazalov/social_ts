import { FC, memo } from 'react'

import { Post } from './post/Post'
import { S } from './Posts.styled'

import { C } from '../../../app/styles/Common.styled'
import { TextForm, TitleBlock } from '../../../components'
import { PostT } from '../../../redux/profile-reducer'

interface PostsPT {
  posts: PostT[]
  addPost: (postText: string) => void
}

export const Posts: FC<PostsPT> = memo(({ posts, addPost }) => {
  return (
    <S.Posts $direction={'column'} $gap={'20px'}>
      <C.ShadowContainer>
        <TitleBlock title={'My posts'} />
        <S.FormWrapper>
          <TextForm placeholder={'Enter post message...'} callback={addPost} />
        </S.FormWrapper>
      </C.ShadowContainer>
      {posts.map((el) => (
        <Post key={el.id} post={el} />
      ))}
    </S.Posts>
  )
})
