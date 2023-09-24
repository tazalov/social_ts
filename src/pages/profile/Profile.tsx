import { FC } from 'react'
import cover from '../../app/assets/images/carrepair.webp'
import { FriendsT, PostT, ProfileT } from '../../redux/profile-reducer'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { Friends } from './friends/Friends'
import { Posts } from './posts/Posts'
import { About } from './about/About'
import { S } from './Profile.styled'
import { C } from '../../app/styles/Common.styled'

interface ProfilePT {
  profile: ProfileT
  posts: PostT[]
  friends: FriendsT | null
  addPost: (postText: string) => void
  isOwner: boolean
}

export const Profile: FC<ProfilePT> = ({ profile, posts, friends, addPost, isOwner }) => (
  <C.FlexWrapper $gap={'20px'} $direction={'column'}>
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
    <C.FlexWrapper $gap={'20px'}>
      <Posts posts={posts} addPost={addPost} />
      <C.FlexWrapper $gap={'20px'} $direction={'column'}>
        <About about={profile.aboutMe} />
        <Friends friends={friends} isOwner={isOwner} />
      </C.FlexWrapper>
    </C.FlexWrapper>
  </C.FlexWrapper>
)
