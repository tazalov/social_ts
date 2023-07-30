import React from "react";
import { addPostAC, PostT, ProfileAT } from "../../../redux/profile.reducer";
import { Posts } from "./Posts";

type PostsContainerPT = {
  posts: PostT[];
  dispatch: (value: ProfileAT) => void;
};

export function PostsContainer({ posts, dispatch }: PostsContainerPT) {
  const addPost = (postText: string) => {
    dispatch(addPostAC(postText));
  };

  return <Posts posts={posts} addPost={addPost} />;
}
