import { ActionsT, ProfileT } from "./_store";

export type AddPostAT = {
  type: "social/profile/ADD_POST";
  postText: string;
};

export const addPostAC = (postText: string): AddPostAT => ({
  type: "social/profile/ADD_POST",
  postText,
});

export const profileReducer = (state: ProfileT, action: ActionsT) => {
  switch (action.type) {
    case "social/profile/ADD_POST": {
      const newPost = {
        id: 4,
        user: "Tazalov",
        text: action.postText,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    default: {
      return state;
    }
  }
};
