export type UserT = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

export type ProgressFollowT = {
  isFetch: boolean;
  userId: number[];
};

export type InitialStateT = {
  list: UserT[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  isPageLoading: boolean;
  progressFollow: ProgressFollowT;
};

const initialState: InitialStateT = {
  list: [],
  totalCount: 0,
  pageSize: 15,
  currentPage: 1,
  isPageLoading: true,
  progressFollow: {
    isFetch: false,
    userId: [],
  },
};

export const usersReducer = (
  state: InitialStateT = initialState,
  action: UsersAT,
) => {
  switch (action.type) {
    case "social/users/FOLLOW": {
      return {
        ...state,
        list: state.list?.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    }
    case "social/users/UNFOLLOW": {
      return {
        ...state,
        list: state.list?.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    }
    case "social/users/SET_USERS": {
      return {
        ...state,
        list: action.users,
        totalCount: action.totalCount,
      };
    }
    case "social/users/SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case "social/users/SET_LOADING": {
      return {
        ...state,
        isPageLoading: action.isLoad,
      };
    }
    case "social/users/PROGRESS_FOLLOW": {
      return {
        ...state,
        progressFollow: {
          isFetch: action.isFetch,
          userId: action.isFetch
            ? [...state.progressFollow.userId, action.id]
            : state.progressFollow.userId.filter((el) => el !== action.id),
        },
      };
    }
    default: {
      return state;
    }
  }
};

export type UsersAT =
  | FollowAT
  | UnfollowAT
  | SetUsersAT
  | SetCurrentPageAT
  | SetLoadingPageAT
  | ToggleProgressFollowAT;

type FollowAT = {
  type: "social/users/FOLLOW";
  id: number;
};

type UnfollowAT = {
  type: "social/users/UNFOLLOW";
  id: number;
};

type SetUsersAT = {
  type: "social/users/SET_USERS";
  users: UserT[];
  totalCount: number;
};

type SetCurrentPageAT = {
  type: "social/users/SET_CURRENT_PAGE";
  currentPage: number;
};

type SetLoadingPageAT = {
  type: "social/users/SET_LOADING";
  isLoad: boolean;
};

type ToggleProgressFollowAT = {
  type: "social/users/PROGRESS_FOLLOW";
  isFetch: boolean;
  id: number;
};

export const follow = (id: number): FollowAT => ({
  type: "social/users/FOLLOW",
  id,
});

export const unfollow = (id: number): UnfollowAT => ({
  type: "social/users/UNFOLLOW",
  id,
});

export const setUsers = (users: UserT[], totalCount: number): SetUsersAT => ({
  type: "social/users/SET_USERS",
  users,
  totalCount,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({
  type: "social/users/SET_CURRENT_PAGE",
  currentPage,
});

export const setLoadingPage = (isLoad: boolean): SetLoadingPageAT => ({
  type: "social/users/SET_LOADING",
  isLoad,
});

export const toggleProgressFollow = (
  isFetch: boolean,
  id: number,
): ToggleProgressFollowAT => ({
  type: "social/users/PROGRESS_FOLLOW",
  isFetch,
  id,
});
