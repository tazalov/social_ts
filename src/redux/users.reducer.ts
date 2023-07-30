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
  list: [
    {
      name: "Zhenya_pas",
      id: 19589,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
      },
      status: "No money, no honey!",
      followed: false,
    },
    {
      name: "Arseniy",
      id: 19588,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
      },
      status: "",
      followed: false,
    },
    {
      name: "Alabaika",
      id: 1958,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
      },
      status: "it's my status",
      followed: false,
    },
    {
      name: "Zhenya_pas",
      id: 1989,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
      },
      status: "No money, no honey!",
      followed: false,
    },
    {
      name: "Arseniy",
      id: 9588,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
      },
      status: "",
      followed: false,
    },
    {
      name: "Alabaika",
      id: 195,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
      },
      status: "it's my status",
      followed: false,
    },
    {
      name: "Zhenya_pas",
      id: 18,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
      },
      status: "No money, no honey!",
      followed: false,
    },
    {
      name: "Arseniy",
      id: 958,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
      },
      status: "",
      followed: false,
    },
    {
      name: "Alabaika",
      id: 95,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
      },
      status: "it's my status",
      followed: false,
    },
    {
      name: "Zhenya_pas",
      id: 8,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
      },
      status: "No money, no honey!",
      followed: false,
    },
    {
      name: "Arseniy",
      id: 5,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
      },
      status: "",
      followed: false,
    },
    {
      name: "Alabaika",
      id: 1,
      uniqueUrlName: null,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
      },
      status: "it's my status",
      followed: false,
    },
  ],
};

export const usersReducer = (
  state: InitialStateT = initialState,
  action: any,
) => {
  switch (action.type) {
    case "social/profile/FOLLOW": {
      return {
        ...state,
        list: state.list.map((el) => {
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
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export type UsersAT = FollowAT | UnfollowAT;

type FollowAT = {
  type: "social/profile/FOLLOW";
  id: number;
};
type UnfollowAT = {
  type: "social/profile/UNFOLLOW";
  id: number;
};

export const followAC = (id: number): FollowAT => ({
  type: "social/profile/FOLLOW",
  id,
});

export const unfollowAC = (id: number): UnfollowAT => ({
  type: "social/profile/UNFOLLOW",
  id,
});
