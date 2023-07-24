import React from "react";
import { Social } from "../../../../components/Icon/Social";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import styled from "styled-components";

type LinksPT = {};

function Links(props: LinksPT) {
  return (
    <FlexWrapper>
      <Block>
        <Social iconId={"github"} />
      </Block>
      <Block>
        <Social iconId={"vk"} />
      </Block>
      <Block>
        <Social iconId={"facebook"} />
      </Block>
      <Block>
        <Social iconId={"instagram"} />
      </Block>
      <Block>
        <Social iconId={"twitter"} />
      </Block>
      <Block>
        <Social iconId={"website"} />
      </Block>
      <Block>
        <Social iconId={"youtube"} />
      </Block>
      <Block>
        <Social iconId={"mainLink"} />
      </Block>
    </FlexWrapper>
  );
}

export default Links;

const Block = styled.div`
  margin: 5px;
`;
