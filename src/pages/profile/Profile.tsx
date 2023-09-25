import { FC } from 'react'

import { About } from './about/About'
import { Friends } from './friends/Friends'
import { Posts } from './posts/Posts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

import { C } from '../../app/styles/Common.styled'
import { FriendsT, PostT, ProfileT } from '../../redux/profile-reducer'

interface ProfilePT {
  profile: ProfileT
  posts: PostT[]
  friends: FriendsT | null
  isOwner: boolean
  errorUpdate: string
  addPost: (postText: string) => void
  updatePhoto: (photo: File) => void
  updateProfile: (profile: Omit<ProfileT, 'photos'>) => void
}

export const Profile: FC<ProfilePT> = ({
  profile,
  posts,
  friends,
  isOwner,
  errorUpdate,
  addPost,
  updatePhoto,
  updateProfile,
}) => {
  const { lookingForAJob, contacts, aboutMe } = profile
  return (
    <C.FlexWrapper $gap={'20px'} $direction={'column'}>
      <ProfileInfo
        profile={profile}
        updatePhoto={updatePhoto}
        isOwner={isOwner}
        updateProfile={updateProfile}
        errorUpdate={errorUpdate}
      />
      <C.FlexWrapper $gap={'20px'}>
        <Posts posts={posts} addPost={addPost} />
        <C.FlexWrapper $gap={'20px'} $direction={'column'}>
          <About about={aboutMe} contacts={contacts} lookingForAJob={lookingForAJob} />
          <Friends friends={friends} />
        </C.FlexWrapper>
      </C.FlexWrapper>
    </C.FlexWrapper>
  )
}
