import { ProfileAT } from '../actions/types'
import { ProfileST } from './types'

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
  friends: {
    count: 123,
    list: [
      { id: 1, name: 'Egorka Zashibu' },
      { id: 2, name: 'Vsaya' },
      { id: 3, name: 'Antoni' },
      { id: 4, name: 'Dima' },
      { id: 5, name: 'blabla' },
      { id: 6, name: 'Tratata' },
    ],
  },
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
    default: {
      return state
    }
  }
}
