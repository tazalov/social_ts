import { FC, ReactNode, MouseEvent, useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { Portal } from '../portal/Portal'

interface ModalPT {
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal: FC<ModalPT> = ({ children, isOpen, onClose }) => {
  const handleClickContent = (e: MouseEvent) => {
    e.stopPropagation()
  }
  const handleClickClose = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClickClose()
      }
    },
    [handleClickClose],
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown, isOpen])

  return (
    <Portal element={document.getElementById('root') || undefined}>
      <StyledModal $isOpen={isOpen || false}>
        <Overlay onClick={handleClickClose}>
          <Content $isOpen={isOpen || false} onClick={handleClickContent}>
            {children}
          </Content>
        </Overlay>
      </StyledModal>
    </Portal>
  )
}

interface StyledModalPT {
  $isOpen: boolean
}

const StyledModal = styled.div<StyledModalPT>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${(props) => (props.$isOpen ? 10000 : -1)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? 'all' : 'none')};
  transition: all 0.2s ease-out;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div<StyledModalPT>`
  background-color: ${(props) => props.theme.colors.secondaryBg};
  transition: 0.3s transform;
  transform: scale(0.5);
  max-width: 50%;
  ${(props) =>
    props.$isOpen &&
    css`
      transform: scale(1);
    `};
`
