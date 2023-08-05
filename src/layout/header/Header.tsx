import { Icon } from "../../components/icon/Icon";
import { S } from "./Header.styled";
import { C } from "../../components/Common.styled";

export function Header() {
  return (
    <C.Container>
      <C.ShadowContainer as={S.Header}>
        <C.FlexWrapper justify={"space-between"} align={"center"}>
          <Icon iconId={"logo"} width={"40px"} height={"40px"} />
          <C.FlexWrapper gap={"20px"}>
            <S.MenuLink to={"/users"}>
              <Icon iconId={"search"} width={"20px"} height={"20px"} />
            </S.MenuLink>
            <S.MenuLink to={"/users"}>
              <Icon iconId={"gear"} width={"20px"} height={"20px"} />
            </S.MenuLink>
            <S.MenuLink to={"/users"}>
              <Icon
                iconId={"logout"}
                width={"20px"}
                height={"20px"}
                viewBox="0 0 32 32"
              />
            </S.MenuLink>
          </C.FlexWrapper>
        </C.FlexWrapper>
      </C.ShadowContainer>
    </C.Container>
  );
}
