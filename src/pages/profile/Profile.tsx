import { FC } from 'react'

import { About } from './about/About'
import { Friends } from './friends/Friends'
import { Posts } from './posts/Posts'
import { S } from './Profile.styled'
import { ProfileInfo } from './profileInfo/ProfileInfo'

import cover from '../../app/assets/images/carrepair.webp'
import { C } from '../../app/styles/Common.styled'
import { FriendsT, PostT, ProfileT } from '../../redux/profile-reducer'

interface ProfilePT {
  profile: ProfileT
  posts: PostT[]
  friends: FriendsT | null
  isOwner: boolean
  addPost: (postText: string) => void
  updatePhoto: (photo: File) => void
  updateProfile: (profile: Omit<ProfileT, 'photos'>) => void
}

export const Profile: FC<ProfilePT> = ({ profile, posts, friends, isOwner, addPost, updatePhoto, updateProfile }) => {
  return (
    <C.FlexWrapper $gap={'20px'} $direction={'column'}>
      <C.ShadowContainer>
        <S.CoverImg>
          <img src={profile.photos.large || cover} alt='' />
        </S.CoverImg>
        <ProfileInfo profile={profile} updatePhoto={updatePhoto} isOwner={isOwner} updateProfile={updateProfile} />
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
}
