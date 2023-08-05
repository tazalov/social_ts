import { Icon } from "../../components/icon/Icon";
import { S } from "./Header.styled";
import { C } from "../../components/Common.styled";

type HeaderPT = {
  isAuth: boolean;
  login: string;
};

export function Header({ isAuth, login }: HeaderPT) {
  return (
    <C.Container>
      <C.ShadowContainer as={S.Header}>
        <C.FlexWrapper justify={"space-between"} align={"center"}>
          <Icon iconId={"logo"} width={"40px"} height={"40px"} />
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
