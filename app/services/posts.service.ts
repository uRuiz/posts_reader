import { BASE_URL } from "../utils/constants";

export const getAllPosts = async (limit: number, skip: number) => {
  const response = await fetch(`${BASE_URL}/posts?limit=${limit}&skip=${skip}`);
  const data = await response.json();
  return data;
};

export const getPostCommentsById = async (postId: number) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  const data = await response.json();
  return data;
};
