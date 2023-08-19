export type PostT = {
  id: number
  user: string
  text: string
  likes: number
}

export type FriendT = {
  id: number
  name: string
}

export type FriendsT = {
  count: number
  list: FriendT[]
}

export type ContactsT = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type PhotosT = {
  small: string | null
  large: string | null
}

export type ProfileT = {
  aboutMe: string | null
  contacts: ContactsT
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  userId: string
  photos: PhotosT
}

export type InitialStateT = {
  profile: ProfileT | null
  posts: PostT[]
  friends: FriendsT
}

const initialState: InitialStateT = {
  profile: null,
  posts: [
    {
      id: 1,
      user: 'Tazalov',
      text: "it' my first post",
      likes: 12,
    },
    {
      id: 2,
      user: 'Dariya',
      text: "it' my second post",
      likes: 22,
    },
    {
      id: 3,
      user: 'Egorka',
      text: "it' my third post",
      likes: 12312,
    },
  ],
  friends: {
    count: 123,
    list: [
      {
        id: 1,
        name: 'Egorka Zashibu',
      },
      {
        id: 2,
        name: 'Vsaya',
      },
      {
        id: 3,
        name: 'Antoni',
      },
      {
        id: 4,
        name: 'Dima',
      },
      {
        id: 5,
        name: 'blabla',
      },
      {
        id: 6,
        name: 'Tratata',
      },
    ],
  },
}

export const profileReducer = (state: InitialStateT = initialState, action: ProfileAT) => {
  switch (action.type) {
    case 'social/profile/ADD_POST': {
      const newPost = {
        id: 4,
        user: 'Tazalov',
        text: action.postText,
        likes: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case 'social/profile/SET_PROFILE': {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default: {
      return state
    }
  }
}

export type ProfileAT = AddPostAT | SetProfileAT

export type AddPostAT = {
  type: 'social/profile/ADD_POST'
  postText: string
}

export type SetProfileAT = {
  type: 'social/profile/SET_PROFILE'
  profile: ProfileT
}

export const addPost = (postText: string): AddPostAT => ({
  type: 'social/profile/ADD_POST',
  postText,
})

export const setProfile = (profile: ProfileT): SetProfileAT => ({
  type: 'social/profile/SET_PROFILE',
  profile,
})
