import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../components'
import noAvatar from '../../../app/assets/images/anynft.webp'
import { FriendT } from '../../../redux/profile-reducer'
import { getShortString } from '../../../utils/string/getShortString'
import { S } from './Friends.styled'

interface FriendPT {
  friend: FriendT
}

export const Friend: FC<FriendPT> = ({ friend }) => {
  const { id, name, photos } = friend
  return (
    <Link to={`/profile/${id}`}>
      <S.Friend>
        <Avatar img={photos.small || noAvatar} w={80} h={80} />
        <S.Name>{getShortString(name, 10)}</S.Name>
      </S.Friend>
    </Link>
  )
}
