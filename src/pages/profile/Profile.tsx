import cover from "../../assets/images/carrepair.webp";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { Friends } from "./friends/Friends";
import { FriendsT, PostT, ProfileT } from "../../redux/profile.reducer";
import { Posts } from "./posts/Posts";
import { Preloader } from "../../components/preloader/Preloader";
import { About } from "./about/About";
import { S } from "./Profile.styled";
import { C } from "../../components/Common.styled";

type ProfilePT = {
  profile: ProfileT | null;
  posts: PostT[];
  friends: FriendsT;
  addPost: (postText: string) => void;
};

export function Profile({ posts, friends, addPost, profile }: ProfilePT) {
  return !profile ? (
    <Preloader size={150} />
  ) : (
    <C.FlexWrapper gap={"20px"} direction={"column"}>
      <C.ShadowContainer>
        <S.CoverImg>
          <img src={profile.photos.large || cover} alt="" />
        </S.CoverImg>
        <ProfileInfo
          avatar={profile.photos.small}
          name={profile.fullName}
          isLookingJob={profile.lookingForAJob}
          jobDesc={profile.lookingForAJobDescription}
          contacts={profile.contacts}
        />
      </C.ShadowContainer>
      <C.FlexWrapper gap={"20px"}>
        <Posts posts={posts} addPost={addPost} />
        <C.FlexWrapper gap={"20px"} direction={"column"}>
          <About about={profile.aboutMe} />
          <Friends friends={friends} />
        </C.FlexWrapper>
      </C.FlexWrapper>
    </C.FlexWrapper>
  );
}
