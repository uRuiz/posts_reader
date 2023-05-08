import { useState, useEffect } from "react";
import { Comment } from "../types/types";
import { getPostCommentsById } from "../services/posts.service";

export const useGetCommentsById = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchPostCommentsById = async () => {
      try {
        setLoading(true);
        if (postId) {
          const { comments } = await getPostCommentsById(postId);
          setComments(comments);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostCommentsById();
  }, [postId]);

  return { comments, loading, error };
};
