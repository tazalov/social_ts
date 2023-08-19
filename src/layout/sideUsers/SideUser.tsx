import { FC } from 'react'
import avatar from '../../assets/images/carrepair.webp'
import { Avatar } from '../../components/avatar/Avatar'
import { ButtonB } from '../../components/button/ButtonB'
import { S } from './SideUsers.styled'

type UserPT = {
  name: string
  followed: boolean
}

export const SideUser: FC<UserPT> = ({ name, followed }) => (
  <S.User $align={'center'} $gap={'5px'} $justify={'space-between'}>
    <S.Info $align={'center'} $gap={'10px'}>
      <Avatar img={avatar} w={50} h={50} />
      <span>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</span>
    </S.Info>
    <ButtonB title={'follow'} callback={() => {}} disable={followed} />
  </S.User>
)
