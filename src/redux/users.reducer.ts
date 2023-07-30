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

export type InitialStateT = {
  list: UserT[];
};

const initialState: InitialStateT = {
  list: [],
};

export const usersReducer = (
  state: InitialStateT = initialState,
  action: UsersAT,
) => {
  switch (action.type) {
    case "social/profile/FOLLOW": {
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
    case "social/profile/UNFOLLOW": {
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
    case "social/profile/SET_USERS": {
      return {
        ...state,
        list: [...state.list, ...action.users],
      };
    }
    default: {
      return state;
    }
  }
};

export type UsersAT = FollowAT | UnfollowAT | SetUsersAT;

type FollowAT = {
  type: "social/profile/FOLLOW";
  id: number;
};

type UnfollowAT = {
  type: "social/profile/UNFOLLOW";
  id: number;
};

type SetUsersAT = {
  type: "social/profile/SET_USERS";
  users: UserT[];
};

export const followAC = (id: number): FollowAT => ({
  type: "social/profile/FOLLOW",
  id,
});

export const unfollowAC = (id: number): UnfollowAT => ({
  type: "social/profile/UNFOLLOW",
  id,
});

export const setUsersAC = (users: UserT[]): SetUsersAT => ({
  type: "social/profile/SET_USERS",
  users,
});
