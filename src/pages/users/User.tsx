import styled from "styled-components";
import { FlexWrapperStyled } from "../../components/FlexWrapper.styled";
import { Avatar } from "../../components/avatar/Avatar";
import photo from "../../assets/images/anynft.webp";
import { ButtonB } from "../../components/button/ButtonB";
import { SubtitleStyled } from "../../components/Subtitle.styled";
import { theme } from "../../styles/Theme";

type UserPT = {
  id: number;
  name: string;
  followed: boolean;
  avatarUrl: string | null;
  status: string | null;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

export function User({
  id,
  name,
  followed,
  avatarUrl,
  status,
  follow,
  unfollow,
}: UserPT) {
  const newStatus = status
    ? status.length > 15
      ? `${status.slice(0, 13)}...`
      : status
    : "No status";
  const followUser = () => {
    follow(id);
  };
  const unfollowUser = () => {
    unfollow(id);
  };
  return (
    <StyledUser direction={"column"} align={"center"} gap={"20px"}>
      <Avatar img={avatarUrl || photo} w={100} h={100} />
      <Name>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</Name>
      <Status>{newStatus}</Status>
      <ButtonB
        title={followed ? "unfollow" : "follow"}
        callback={followed ? unfollowUser : followUser}
      />
    </StyledUser>
  );
}

const StyledUser = styled(FlexWrapperStyled)`
  padding: 10px;
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const Name = styled.div`
  ${SubtitleStyled};
  font-size: 22px;
`;

const Status = styled.div`
  color: ${theme.colors.secondaryFont};
  font-size: 14px;
`;
