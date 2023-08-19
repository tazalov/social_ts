import { FC } from 'react'
import { TitleBlock } from '../../components/titleBlock/TitleBlock'
import { SideUserT } from '../../redux/sideusers.reducer'
import { C } from '../../styles/Common.styled'
import { SideUser } from './SideUser'
import { S } from './SideUsers.styled'

type CoursesPT = {
  sideUsers: SideUserT[]
}

export const SideUsers: FC<CoursesPT> = ({ sideUsers }) => (
  <C.ShadowContainer>
    <TitleBlock title={'Who to follow'} />
    <S.UserList>
      {sideUsers.map(el => (
        <SideUser key={el.id} name={el.name} followed={el.followed} />
      ))}
    </S.UserList>
  </C.ShadowContainer>
)
