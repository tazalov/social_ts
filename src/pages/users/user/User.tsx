import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import photo from '../../../assets/images/anynft.webp'
import { Avatar } from '../../../components/avatar/Avatar'
import { ButtonB } from '../../../components/button/ButtonB'
import { Loading } from '../../../components/icon/Loading'
import { ProgressFollowT } from '../../../redux/users/reducer/types'
import { S } from './User.styled'

interface UserPT {
  id: number
  name: string
  followed: boolean
  avatarUrl: string | null
  status: string | null
  follow: (id: number) => void
  unfollow: (id: number) => void
  progressFollow: ProgressFollowT
}

export const User: FC<UserPT> = ({
  id,
  name,
  followed,
  avatarUrl,
  status,
  follow,
  unfollow,
  progressFollow,
}) => {
  const newStatus = status
    ? status.length > 15
      ? `${status.slice(0, 13)}...`
      : status
    : 'No status'

  const followUser = () => follow(id)
  const unfollowUser = () => unfollow(id)

  return (
    <S.User $direction={'column'} $align={'center'} $gap={'20px'}>
      <NavLink to={`/profile/${id}`}>
        <Avatar img={avatarUrl || photo} w={100} h={100} />
      </NavLink>
      <S.Name>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</S.Name>
      <S.Status>{newStatus}</S.Status>
      {progressFollow.userId.some(el => el === id) ? (
        <Loading />
      ) : (
        <ButtonB
          title={followed ? 'unfollow' : 'follow'}
          callback={followed ? unfollowUser : followUser}
          disable={progressFollow.userId.includes(id)}
        />
      )}
    </S.User>
  )
}
