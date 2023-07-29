import { ButtonB } from "../button/ButtonB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";
import { SubTitle } from "../Subtitle";

type TitleBlockPT = {
  title: string | React.ReactNode;
};

export function TitleBlock({ title }: TitleBlockPT) {
  return (
    <TitleWrapper justify={"space-between"} align={"center"}>
      <Title>{title}</Title>
      <ButtonB
        title={<FontAwesomeIcon icon={faAnglesRight} />}
        callback={() => {}}
      />
    </TitleWrapper>
  );
}

const TitleWrapper = styled(FlexWrapper)`
  background-color: ${theme.colors.thirdBg};
  padding: 15px 20px;
`;

const Title = styled.h2`
  ${SubTitle};
  span {
    color: ${theme.colors.secondaryFont};
    font-size: 14px;
    padding: 5px;
  }
`;
