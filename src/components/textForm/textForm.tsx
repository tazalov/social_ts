import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { C } from '../../styles/Common.styled'
import { Button } from '../button/Button'

type TextFormPT = {
  place: string
  callback: (value: string) => void
  submit?: boolean
}

export function TextForm({ place, callback, submit }: TextFormPT) {
  const [text, setText] = useState<string>('')

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const onClickHandler = () => {
    if (text) {
      callback(text)
      setText('')
    }
  }

  return (
    <C.FlexWrapper $gap={'10px'}>
      <StyledTextArea placeholder={place} value={text} onChange={onChangeHandler} />
      <Button title={'send'} callback={onClickHandler} type={submit ? 'submit' : undefined} />
    </C.FlexWrapper>
  )
}

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  color: ${props => props.theme.colors.primaryFont};
  background-color: ${props => props.theme.colors.thirdBg};
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Arial',
    sans-serif;
`
