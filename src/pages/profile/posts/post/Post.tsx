import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, memo } from 'react'

import { S } from './Post.styled'

import avatar from '../../../../app/assets/images/anynft.webp'
import { Avatar } from '../../../../components'

import { PostT } from '../../../../redux/profile-reducer'

interface PostPT {
  post: PostT
}

export const Post: FC<PostPT> = memo(({ post }) => {
  const { user, text, likes } = post
  return (
    <S.Post>
      <S.PostHeader $align={'center'}>
        <Avatar img={avatar} w={50} h={50} />
        <S.UserInfo $gap={'10px'} $justify={'space-between'}>
          <span>{user}</span>
          <i>12/04/2022</i>
        </S.UserInfo>
      </S.PostHeader>
      <S.PostText>{text}</S.PostText>
      <S.PostButtons $gap={'10px'} $justify={'space-between'}>
        <button>
          <FontAwesomeIcon icon={faHeart} />
          <span>{likes}</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </S.PostButtons>
    </S.Post>
  )
})
