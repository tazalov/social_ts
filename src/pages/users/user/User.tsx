import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import photo from '../../../app/assets/images/anynft.webp'
import { Avatar, ButtonB, Loading } from '../../../components'
import { ProgressFollowT } from '../../../redux/users-reducer'
import { getShortString } from '../../../utils/string/getShortString'
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
  const newStatus = status ? getShortString(status, 15) : 'No status'
  const followUser = () => follow(id)
  const unfollowUser = () => unfollow(id)

  return (
    <S.User $direction={'column'} $align={'center'} $gap={'20px'}>
      <NavLink to={`/profile/${id}`}>
        <Avatar img={avatarUrl || photo} w={100} h={100} />
      </NavLink>
      <S.Name>{getShortString(name, 10)}</S.Name>
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
