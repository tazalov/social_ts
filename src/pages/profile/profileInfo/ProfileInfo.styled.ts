import styled, { css } from 'styled-components'

import { C } from '../../../app/styles/Common.styled'

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

const Looking = styled.div`
  text-align: left;
  span {
    font-size: 18px;
    padding: 5px 5px 5px 0;
  }
`

const Buttons = styled(C.FlexWrapper)`
  padding: 0 10px;
`

const EditPhoto = styled.label`
  padding: 6px;
  color: ${(props) => props.theme.colors.accent};
  border: 1px solid ${(props) => props.theme.colors.accent};
  transition: all 0.3s ease;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    border: 1px solid ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.thirdBg};
  }
`

export const S = {
  ProfileInfo: ProfileInfoStyled,
  AvatarPos,
  Info,
  Name,
  Status,
  Looking,
  Buttons,
  EditPhoto,
}
