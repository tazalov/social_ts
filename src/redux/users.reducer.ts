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
      id: 19587,
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
      id: 19587,
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
      id: 19587,
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
      id: 19587,
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
    case "social/profile/ADD_MESSAGE": {
      return state;
    }
    default: {
      return state;
    }
  }
};
