import { Button } from "../button/Button";
import { FlexWrapperStyled } from "../FlexWrapper.styled";
import { ShadowContainerStyled } from "../ShadowContainer.styled";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/Theme";

type PaginationPT = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
};

export function Pagination({
  totalCount,
  pageSize,
  currentPage,
}: PaginationPT) {
  const pagesCount: number = Math.ceil(totalCount / pageSize);
  const pages: Array<number> = Array.from(
    { length: pagesCount },
    (_, i) => i + 1,
  );
  const portionSize: number = 10;
  const portionCount: number = Math.ceil(pagesCount / portionSize);

  type SetPortionNumT = (value: number) => void;

  const [portionNum, setPortionNum]: [number, SetPortionNumT] = useState(
    Math.ceil(currentPage / portionSize),
  );

  const leftBorderPortion: number = (portionNum - 1) * portionSize + 1; // 1 11 21 31 41
  const rightBorderPortion: number = portionNum * portionSize; // 10 20 30 40 50

  const buttons: JSX.Element[] = pages
    .filter((p) => p >= leftBorderPortion && p <= rightBorderPortion)
    .map((el) => (
      <StyledButton key={el} onClick={() => {}}>
        {el}
      </StyledButton>
    ));

  return (
    <StyledPagination>
      <FlexWrapperStyled justify={"center"} align={"center"} gap={"10px"}>
        {portionNum > 1 && (
          <StyledArrow onClick={() => setPortionNum(portionNum - 1)}>
            <FontAwesomeIcon icon={faCaretLeft} size="2x" />
          </StyledArrow>
        )}
        {buttons.length > 1 && buttons}
        {portionCount > portionNum && (
          <StyledArrow onClick={() => setPortionNum(portionNum + 1)}>
            <FontAwesomeIcon icon={faCaretRight} size={"2x"} />
          </StyledArrow>
        )}
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
