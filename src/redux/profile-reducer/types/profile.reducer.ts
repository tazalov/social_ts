export interface PostT {
  id: number
  user: string
  text: string
  likes: number
}

export interface FriendT {
  name: string
  id: number
  uniqueUrlName: null
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
}

export interface FriendsT {
  count: number
  list: FriendT[]
}

export interface ContactsT {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export interface PhotosT {
  small: string | null
  large: string | null
}

export interface ProfileT {
  aboutMe: string | null
  contacts: ContactsT
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  userId: number
  photos: PhotosT
}

export interface ProfileST {
  profile: ProfileT | null
  posts: PostT[]
  friends: FriendsT | null
  status: string
  isProfileLoading: boolean
  errorUpdate: string
}
