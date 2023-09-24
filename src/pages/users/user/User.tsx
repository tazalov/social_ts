import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { S } from './User.styled'

import photo from '../../../app/assets/images/anynft.webp'
import { Avatar, ButtonB, Loading } from '../../../components'
import { ProgressFollowT, UserT } from '../../../redux/users-reducer'
import { getShortString } from '../../../utils/string/getShortString'

interface UserPT {
  user: UserT
  follow: (id: number) => void
  unfollow: (id: number) => void
  progressFollow: ProgressFollowT
}

export const User: FC<UserPT> = ({ user, follow, unfollow, progressFollow }) => {
  const { id, name, status, followed, photos } = user

  const newStatus = status ? getShortString(status, 15) : 'No status'
  const followUser = () => follow(id)
  const unfollowUser = () => unfollow(id)

  return (
    <S.User $direction={'column'} $align={'center'} $gap={'20px'}>
      <NavLink to={`/profile/${id}`}>
        <Avatar img={photos.small || photo} w={100} h={100} />
      </NavLink>
      <S.Name>{getShortString(name, 10)}</S.Name>
      <S.Status>{newStatus}</S.Status>
      {progressFollow.userId.some((el) => el === id) ? (
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
