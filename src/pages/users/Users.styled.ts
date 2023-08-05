import styled from "styled-components";
import { C } from "../../components/Common.styled";

const Users = styled(C.ShadowContainer)`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const S = {
  Users,
};