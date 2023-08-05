import { Avatar } from "../../../components/avatar/Avatar";
import photo from "../../../assets/images/anynft.webp";
import { ButtonB } from "../../../components/button/ButtonB";
import { NavLink } from "react-router-dom";
import { S } from "./User.styled";

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
    <S.User direction={"column"} align={"center"} gap={"20px"}>
      <NavLink to={`/profile/${id}`}>
        <Avatar img={avatarUrl || photo} w={100} h={100} />
      </NavLink>
      <S.Name>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</S.Name>
      <S.Status>{newStatus}</S.Status>
      <ButtonB
        title={followed ? "unfollow" : "follow"}
        callback={followed ? unfollowUser : followUser}
      />
    </S.User>
  );
}
