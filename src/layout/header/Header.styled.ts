import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  margin: 20px 0;
  padding: 10px;
`;

const MenuLink = styled(NavLink)`
  svg {
    transition: all 0.3s linear;
    &:hover {
      fill: ${theme.colors.accent};
    }
  }
`;

export const S = {
  Header,
  MenuLink,
};
