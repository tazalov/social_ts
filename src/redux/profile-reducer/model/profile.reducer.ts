import { ProfileAT } from '../types/profile.actions'
import { ProfileST } from '../types/profile.reducer'

const initialState: ProfileST = {
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
  ],
  friends: null,
  status: '',
  isProfileLoading: false,
}

export const profileReducer = (state = initialState, action: ProfileAT) => {
  switch (action.type) {
    case 'social/profile/ADD_POST': {
      const newPost = {
        id: state.posts.length + 2,
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
    case 'social/profile/SET_PROFILE_LOADING': {
      return {
        ...state,
        isProfileLoading: action.isLoading,
      }
    }
    case 'social/profile/SET_FRIENDS_PROFILE': {
      const { list, count } = action
      return {
        ...state,
        friends: { list, count },
      }
    }
    case 'social/profile/SET_STATUS': {
      return {
        ...state,
        status: action.status,
      }
    }
    default: {
      return state
    }
  }
}
