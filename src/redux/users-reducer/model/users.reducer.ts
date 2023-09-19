import { UsersAT } from '../types/users.actions'
import { UsersST } from '../types/users.reducer'

const initialState: UsersST = {
  list: [],
  totalCount: 0,
  pageSize: 15,
  currentPage: 1,
  isPageLoading: true,
  progressFollow: {
    isFetch: false,
    userId: [],
  },
}

export const usersReducer = (state = initialState, action: UsersAT) => {
  switch (action.type) {
    case 'social/users/FOLLOW': {
      return {
        ...state,
        list: state.list?.map(el => {
          if (el.id === action.id) {
            return { ...el, followed: true }
          }
          return el
        }),
      }
    }
    case 'social/users/UNFOLLOW': {
      return {
        ...state,
        list: state.list?.map(el => {
          if (el.id === action.id) {
            return { ...el, followed: false }
          }
          return el
        }),
      }
    }
    case 'social/users/SET_USERS': {
      return {
        ...state,
        list: action.users,
        totalCount: action.totalCount,
      }
    }
    case 'social/users/SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case 'social/users/SET_LOADING': {
      return {
        ...state,
        isPageLoading: action.isLoad,
      }
    }
    case 'social/users/PROGRESS_FOLLOW': {
      return {
        ...state,
        progressFollow: {
          isFetch: action.isFetch,
          userId: action.isFetch
            ? [...state.progressFollow.userId, action.id]
            : state.progressFollow.userId.filter(el => el !== action.id),
        },
      }
    }
    default: {
      return state
    }
  }
}
