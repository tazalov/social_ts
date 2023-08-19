import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useState } from 'react'
import { C } from '../../styles/Common.styled'
import { S } from './Pagination.styled'

type PaginationPT = {
  totalCount: number
  pageSize: number
  currentPage: number
  setPage: (page: number) => void
}

export const Pagination: FC<PaginationPT> = ({ totalCount, pageSize, currentPage, setPage }) => {
  const pagesCount: number = Math.ceil(totalCount / pageSize)
  const pages: Array<number> = Array.from({ length: pagesCount }, (_, i) => i + 1)
  const portionSize: number = 10
  const portionCount: number = Math.ceil(pagesCount / portionSize)

  const [portionNum, setPortionNum] = useState<number>(Math.ceil(currentPage / portionSize))

  const leftBorderPortion: number = (portionNum - 1) * portionSize + 1 // 1 11 21 31 41
  const rightBorderPortion: number = portionNum * portionSize // 10 20 30 40 50

  const buttons = pages.reduce((acc: JSX.Element[], el) => {
    const onClickHandler = () => setPage(el)
    if (el >= leftBorderPortion && el <= rightBorderPortion) {
      const button = (
        <S.Button
          as={el === currentPage ? S.SelectedButton : S.Button}
          key={el}
          onClick={onClickHandler}
        >
          {el}
        </S.Button>
      )
      acc.push(button)
    }
    return acc
  }, [])

  return (
    <S.Pagination>
      <C.FlexWrapper $justify={'center'} $align={'center'} $gap={'10px'}>
        {portionNum > 1 && (
          <S.Button onClick={() => setPortionNum(portionNum - 1)}>
            <FontAwesomeIcon icon={faCaretLeft} size="2x" />
          </S.Button>
        )}
        {buttons.length > 1 && buttons}
        {portionCount > portionNum && (
          <S.Button onClick={() => setPortionNum(portionNum + 1)}>
            <FontAwesomeIcon icon={faCaretRight} size={'2x'} />
          </S.Button>
        )}
      </C.FlexWrapper>
    </S.Pagination>
  )
}
