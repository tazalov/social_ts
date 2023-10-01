import styled, { css } from 'styled-components'

import { C } from '../../../app/styles/Common.styled'
import { StyledButton } from '../../../components'

const ProfileInfoStyled = styled(C.FlexWrapper)`
  padding: 10px 10px 10px 160px;
  position: relative;
  width: 100%;
`

const AvatarPos = css`
  position: absolute;
  margin-top: -80px;
  left: 10px;
  top: 0;
  border: 5px solid ${(props) => props.theme.colors.secondaryBg};
  border-radius: 50%;
`

const Info = styled(C.FlexWrapper)`
  margin-left: 20px;
  width: 100%;
`

const Name = styled(C.FlexWrapper)`
  font-size: 25px;
  p {
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props) => props.theme.colors.accent};
  }
  span {
    font-size: 14px;
    padding: 5px;
    background-color: ${(props) => props.theme.colors.primaryBg};
  }
`

const Status = styled.div`
  color: ${(props) => {
    const { name, colors } = props.theme
    return name === 'light' ? colors.primaryFont : colors.secondaryFont
  }};
  display: inline-flex;
  width: 100%;
  & span {
    padding: 5px 5px 5px 0;
    font-style: italic;
    display: inline-block;
    width: 100%;
  }
`

const EditPhoto = styled(StyledButton)`
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
`

const CoverImg = styled.div`
  height: 150px;
  background: rgb(66, 73, 121);
  background: linear-gradient(139deg, rgba(66, 73, 121, 1) 15%, rgba(115, 164, 222, 1) 57%, rgba(0, 212, 255, 1) 100%);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const S = {
  ProfileInfo: ProfileInfoStyled,
  AvatarPos,
  Info,
  Name,
  Status,
  EditPhoto,
  CoverImg,
}
