import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../components'
import noAvatar from '../../../app/assets/images/anynft.webp'
import { getShortString } from '../../../utils/string/getShortString'
import { S } from './Friends.styled'

interface FriendPT {
  id: number
  name: string
  avatar: string | null
}

export const Friend: FC<FriendPT> = ({ id, name, avatar }) => (
  <Link to={`/profile/${id}`}>
    <S.Friend>
      <Avatar img={avatar || noAvatar} w={80} h={80} />
      <S.Name>{getShortString(name, 10)}</S.Name>
    </S.Friend>
  </Link>
)
