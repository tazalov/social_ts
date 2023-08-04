import { ButtonB } from "../button/ButtonB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { FlexWrapperStyled } from "../FlexWrapper.styled";
import { theme } from "../../styles/Theme";
import { SubtitleStyled } from "../Subtitle.styled";

type TitleBlockPT = {
  title: string | React.ReactNode;
  nobtn?: boolean;
};

export function TitleBlock({ title, nobtn }: TitleBlockPT) {
  return (
    <TitleWrapper justify={"space-between"} align={"center"}>
      <Title>{title}</Title>
      {nobtn || (
        <ButtonB
          title={<FontAwesomeIcon icon={faAnglesRight} />}
          callback={() => {}}
        />
      )}
    </TitleWrapper>
  );
}

const TitleWrapper = styled(FlexWrapperStyled)`
  background-color: ${theme.colors.thirdBg};
  padding: 15px 20px;
`;

const Title = styled.h2`
  ${SubtitleStyled};
  span {
    color: ${theme.colors.secondaryFont};
    font-size: 14px;
    padding: 5px;
  }
`;
