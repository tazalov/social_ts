import { Icon } from "../../components/icon/Icon";
import { S } from "./Header.styled";
import { C } from "../../components/Common.styled";
import { ButtonB } from "../../components/button/ButtonB";
import { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type HeaderPT = {
  isAuth: boolean;
  login: string | null;
  toggleTheme: () => void;
};

export function Header({ isAuth, login, toggleTheme }: HeaderPT) {
  const theme = useTheme();
  return (
    <C.Container>
      <C.ShadowContainer as={S.Header}>
        <C.FlexWrapper justify={"space-between"} align={"center"}>
          <C.FlexWrapper align={"center"} gap={"20px"}>
            <ButtonB
              title={
                theme.name === "dark" ? (
                  <FontAwesomeIcon
                    icon={faMoon}
                    style={{ width: "15px", height: "15xp" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSun}
                    style={{ width: "15px", height: "15xp" }}
                  />
                )
              }
              callback={toggleTheme}
            />
            <S.Logo>
              <Icon iconId={"logo"} width={"40px"} height={"40px"} />
            </S.Logo>
          </C.FlexWrapper>
          <C.FlexWrapper gap={"20px"} align={"center"}>
            <S.MenuLink to={"/users"}>
              <Icon iconId={"search"} width={"20px"} height={"20px"} />
            </S.MenuLink>
            <S.MenuLink to={"/users"}>
              <Icon iconId={"gear"} width={"20px"} height={"20px"} />
            </S.MenuLink>
            {isAuth ? (
              <>
                <S.MenuLink to={"/profile"}>
                  <S.Login>{login}</S.Login>
                </S.MenuLink>
                <S.MenuLink to={"/login"}>
                  <Icon
                    iconId={"logout"}
                    width={"20px"}
                    height={"20px"}
                    viewBox="0 0 32 32"
                  />
                </S.MenuLink>
              </>
            ) : (
              <S.MenuLink to={"/login"}>
                <S.Login>Login</S.Login>
              </S.MenuLink>
            )}
          </C.FlexWrapper>
        </C.FlexWrapper>
      </C.ShadowContainer>
    </C.Container>
  );
}
