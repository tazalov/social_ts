import { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { S } from './Error.styled'

export const Error: FC = () => {
  useEffect(() => {
    document.title = 'Error'
  }, [])
  return (
    <S.ErrorWrapper $align={'center'} $justify={'center'} $direction={'column'} $gap={'40px'}>
      <S.Error>PAGE NOT FOUND</S.Error>
      <S.Error>
        <NavLink to={'/profile'}>GO TO HOME</NavLink>
      </S.Error>
    </S.ErrorWrapper>
  )
}
