import { FlexWrapperStyled } from "../FlexWrapper.styled";
import { ShadowContainerStyled } from "../ShadowContainer.styled";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

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
      <FlexWrapperStyled justify={"center"} align={"center"} gap={"10px"}>
        {buttons.length > 1 && buttons}
      </FlexWrapperStyled>
    </StyledPagination>
  );
}

const StyledPagination = styled(ShadowContainerStyled)`
  padding: 10px;
`;

const StyledArrow = styled.button`
  padding: 0;
  color: ${theme.colors.primaryFont};
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.colors.accent};
  }
`;

const StyledButton = styled(StyledArrow)`
  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.accent};
  &:hover {
    background-color: ${theme.colors.primaryFont};
    box-shadow: 0 0 8px rgba(0, 183, 255, 0.4);
  }
`;

const StyledSelectedButton = styled(StyledButton)`
  background-color: ${theme.colors.primaryFont};
  box-shadow: 0 0 8px rgba(0, 183, 255, 0.4);
  color: ${theme.colors.accent};
`;
