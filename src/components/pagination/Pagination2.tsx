import { FC } from 'react'

import { S } from './Pagination.styled'

import { C } from '../../app/styles/Common.styled'

type PaginationPT = {
  totalCount: number
  pageSize: number
  currentPage: number
  setPage: (page: number) => void
}

export const Pagination2: FC<PaginationPT> = ({ totalCount, pageSize, currentPage, setPage }) => {
  const pagesCount = Math.ceil(totalCount / pageSize)
  const pages: number[] = Array.from({ length: pagesCount }, (_, i) => i + 1)

  let slicedPages = currentPage - 9 < 0 ? pages.slice(0, 9) : pages.slice(currentPage - 5, currentPage + 4)

  const buttons = slicedPages.map((el) => {
    const onClickHandler = () => setPage(el)
    return (
      <S.Button as={el === currentPage ? S.SelectedButton : S.Button} key={el} onClick={onClickHandler}>
        {el}
      </S.Button>
    )
  })

  return (
    <S.Pagination>
      <C.FlexWrapper $justify={'center'} $align={'center'} $gap={'10px'}>
        {buttons.length > 1 && buttons}
      </C.FlexWrapper>
    </S.Pagination>
  )
}
