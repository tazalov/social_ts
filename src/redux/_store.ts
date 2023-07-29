export type PostT = {
  id: number;
  user: string;
  text: string;
  likes: number;
};

export type FriendT = {
  id: number;
  name: string;
};

export type FriendsT = {
  count: number;
  list: FriendT[];
};

export type ProfileT = {
  posts: PostT[];
  friends: FriendsT;
};

export type DialogsListItemT = {
  id: number;
  name: string;
};

export type DialogsMessageT = {
  id: number;
  message: string;
};

export type DialogsT = {
  list: DialogsListItemT[];
  messages: DialogsMessageT[];
};

export type SideUserT = {
  id: number;
  name: string;
  followed: boolean;
};

export type StateT = {
  profile: ProfileT;
  dialogs: DialogsT;
  sideUsers: SideUserT[];
};

export type StoreT = {
  _state: StateT;
  getState: () => StateT;
  _callSubscribers: () => void;
  subscribe: (observer: () => void) => void;
  dispatch: (action: ActionsT) => void;
};

type AddPostAT = {
  type: "social/profile/ADD_POST";
  postText: string;
};

export const addPostAC = (postText: string): AddPostAT => ({
  type: "social/profile/ADD_POST",
  postText,
});

type AddMessageAT = {
  type: "social/profile/ADD_MESSAGE";
  messageText: string;
};

export const addMessageAC = (messageText: string): AddMessageAT => ({
  type: "social/profile/ADD_MESSAGE",
  messageText,
});

export type ActionsT = AddPostAT | AddMessageAT;

export const store: StoreT = {
  _state: {
    profile: {
      posts: [
        { id: 1, user: "Tazalov", text: "it' my first post", likes: 12 },
        { id: 2, user: "Dariya", text: "it' my second post", likes: 22 },
        { id: 3, user: "Egorka", text: "it' my third post", likes: 12312 },
      ],
      friends: {
        count: 123,
        list: [
          { id: 1, name: "Egorka Zashibu" },
          { id: 2, name: "Vsaya" },
          { id: 3, name: "Antoni" },
          { id: 4, name: "Dima" },
          { id: 5, name: "blabla" },
          { id: 6, name: "Tratata" },
        ],
      },
    },
    dialogs: {
      list: [
        { id: 1, name: "Iliya" },
        { id: 2, name: "Dmitry" },
        { id: 3, name: "Victor" },
        { id: 4, name: "Dariya" },
        { id: 5, name: "Alena" },
        { id: 6, name: "Vladimir" },
        { id: 7, name: "Tazazal" },
        { id: 8, name: "Iron Man" },
        { id: 9, name: "Blablabla" },
        { id: 10, name: "Zxcxzczxc" },
      ],
      messages: [
        { id: 1, message: "Lorem ipsum" },
        {
          id: 2,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 3,
          message:
            "A molestiae praesentium quod! Earum hic necessitatibus temporibus!",
        },
        {
          id: 4,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
        },
        { id: 5, message: "Lorem ipsum" },
        {
          id: 6,
          message:
            "A molestiae praesentium quod! Earum hic necessitatibus temporibus!",
        },
        { id: 7, message: "Lorem ipsum" },
        { id: 8, message: "A molestiae praesentium quod!" },
        { id: 9, message: "A molestiae praesentium quod!" },
        { id: 10, message: "A molestiae praesentium quod!" },
      ],
    },
    sideUsers: [
      { id: 1, name: "Tazazal", followed: false },
      { id: 2, name: "Anton", followed: false },
      { id: 3, name: "Igor", followed: false },
      { id: 4, name: "Bukashka", followed: false },
      { id: 5, name: "YA YA YA", followed: false },
    ],
  },
  getState() {
    return this._state;
  },
  _callSubscribers: () => {},
  subscribe(observer) {
    this._callSubscribers = observer;
  },
  dispatch(action: ActionsT) {
    switch (action.type) {
      case "social/profile/ADD_POST": {
        const newPost = {
          id: 4,
          user: "Tazalov",
          text: action.postText,
          likes: 0,
        };
        this._state.profile.posts = [...this._state.profile.posts, newPost];
        this._callSubscribers();
        break;
      }
      case "social/profile/ADD_MESSAGE": {
        const newMessage = {
          id: 11,
          message: action.messageText,
        };
        this._state.dialogs.messages = [
          ...this._state.dialogs.messages,
          newMessage,
        ];
        this._callSubscribers();
        break;
      }
    }
  },
};
