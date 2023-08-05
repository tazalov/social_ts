import { Avatar } from "../../../components/avatar/Avatar";
import photo from "../../../assets/images/anynft.webp";
import { ButtonB } from "../../../components/button/ButtonB";
import { NavLink } from "react-router-dom";
import { S } from "./User.styled";
import axios from "axios";
import { ProgressFollow } from "../../../redux/users.reducer";

type UserPT = {
  id: number;
  name: string;
  followed: boolean;
  avatarUrl: string | null;
  status: string | null;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  progressFollow: ProgressFollow;
  toggleProgressFollow: (isFetch: boolean, id: number | null) => void;
};

export function User({
  id,
  name,
  followed,
  avatarUrl,
  status,
  follow,
  unfollow,
  progressFollow,
  toggleProgressFollow,
}: UserPT) {
  const newStatus = status
    ? status.length > 15
      ? `${status.slice(0, 13)}...`
      : status
    : "No status";
  const followUser = () => {
    toggleProgressFollow(true, id);
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
        {},
        {
          withCredentials: true,
          headers: { "API-KEY": "b8ade8b2-587b-4098-8840-48ea374583b5" },
        },
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          toggleProgressFollow(false, null);
          follow(id);
        }
      });
  };
  const unfollowUser = () => {
    toggleProgressFollow(true, id);
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          toggleProgressFollow(false, null);
          unfollow(id);
        }
      });
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
        disable={progressFollow.userId === id}
      />
    </S.User>
  );
}
