import styled from "styled-components";
import { C } from "../Common.styled";

type PaginationPT = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  setPage: (page: number) => void;
};

export function Pagination2({
  totalCount,
  pageSize,
  currentPage,
  setPage,
}: PaginationPT) {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages: number[] = Array.from({ length: pagesCount }, (_, i) => i + 1);

  let slicedPages =
    currentPage - 9 < 0
      ? pages.slice(0, 9)
      : pages.slice(currentPage - 5, currentPage + 4);

  const buttons = slicedPages.map((el) => {
    const onClickHandler = () => setPage(el);
    return (
      <StyledButton
        as={el === currentPage ? StyledSelectedButton : StyledButton}
        key={el}
        onClick={onClickHandler}
      >
        {el}
      </StyledButton>
    );
  });

  return (
    <StyledPagination>
      <C.FlexWrapper justify={"center"} align={"center"} gap={"10px"}>
        {buttons.length > 1 && buttons}
      </C.FlexWrapper>
    </StyledPagination>
  );
}

const StyledPagination = styled(C.ShadowContainer)`
  padding: 10px;
  color: white;
`;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.accent};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryFont};
  }
`;

const StyledSelectedButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.secondaryFont};
`;
