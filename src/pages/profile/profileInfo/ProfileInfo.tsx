import { Avatar } from "../../../components/avatar/Avatar";
import noAvatar from "../../../assets/images/anynft.webp";
import { Links } from "./links/Links";
import { ButtonB } from "../../../components/button/ButtonB";
import { ContactsT } from "../../../redux/profile.reducer";
import { S } from "./ProfileInfo.styled";
import { C } from "../../../components/Common.styled";

type ProfileInfoPT = {
  avatar: string | null;
  name: string;
  isLookingJob: boolean;
  jobDesc: string | null;
  contacts: ContactsT;
};

export function ProfileInfo({
  avatar,
  name,
  isLookingJob,
  jobDesc,
  contacts,
}: ProfileInfoPT) {
  return (
    <C.FlexWrapper align={"center"} justify={"space-between"}>
      <S.ProfileInfo align={"center"}>
        <S.Avatar>
          <Avatar img={avatar || noAvatar} w={150} h={150} />
        </S.Avatar>
        <S.Info direction={"column"} align={"flex-start"} gap={"10px"}>
          <S.Name align={"center"} gap={"5px"}>
            <p>{name}</p>
            <span>{jobDesc || "developer"}</span>
          </S.Name>
          <S.Status>
            <i>A molestiae praesentium quod!</i>
          </S.Status>
          <S.Looking>
            Looking for a job: <span>{isLookingJob ? "YES" : "NO"}</span>
          </S.Looking>
        </S.Info>
      </S.ProfileInfo>
      <S.Buttons
        direction={"column"}
        justify={"center"}
        align={"flex-end"}
        gap={"10px"}
      >
        <ButtonB title={"edit"} callback={() => console.log(1)} />
        <Links links={contacts} />
      </S.Buttons>
    </C.FlexWrapper>
  );
}
