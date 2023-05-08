import { useState, useEffect } from "react";
import { Post } from "../types/types";
import { getAllPosts } from "../services/posts.service";
import { POSTS_PER_PAGE } from "../utils/constants";

export const useGetPosts = (skip: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const { posts } = await getAllPosts(POSTS_PER_PAGE, skip);
        if (posts.length < POSTS_PER_PAGE) {
          setHasMore(false);
        }
        setPosts((prevPosts) => [...prevPosts, ...posts]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (hasMore) {
      fetchPosts();
    }
  }, [skip]);

  return { posts, error, isLoading, hasMore };
};
