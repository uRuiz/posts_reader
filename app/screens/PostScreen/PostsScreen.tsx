import React, { useState, useCallback } from "react";
import { FlatList, View, Text } from "react-native";
import { PostItem } from "../../components/PostItem/PostItem";
import { PostModal } from "../../components/PostModal/PostModal";
import { useGetPosts } from "../../hooks/useGetPosts";
import { ErrorNotification } from "../../components/ErrorNotification/ErrorNotification";
import { Post } from "../../types/types";
import { POSTS_PER_PAGE } from "../../utils/constants";
import styles from "./styles";
import { useFavorites } from "../../context/FavoritesContext";
import { sortPosts } from "../../utils/utils";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const PostsScreen = () => {
  const [skip, setSkip] = useState<number>(0);
  const { posts, error, isLoading, hasMore } = useGetPosts(skip);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const { favoritePosts, toggleFavoritePost } = useFavorites();
  const handleLoadMore = useCallback(() => {
    if (hasMore) {
      setSkip((prevSkip) => prevSkip + POSTS_PER_PAGE);
    }
  }, [hasMore]);

  const keyExtractor = (item: Post, index: number) => `${item.id}-${index}`;
  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <PostItem
        post={item}
        onPress={() => setSelectedPost(item)}
        onPressFavorite={toggleFavoritePost}
        isFavorite={favoritePosts.includes(item.id)}
      />
    ),
    [favoritePosts]
  );

  const renderFooter = () => {
    if (!isLoading) return null;
    return <LoadingSpinner style={styles.footer} />;
  };

  if (error) {
    return <ErrorNotification error={error} />;
  }

  const sortedPosts = sortPosts(posts, favoritePosts);

  return (
    <View style={styles.container} testID="posts-screen-container">
      <Text style={styles.header}>Posts list</Text>
      <FlatList
        data={sortedPosts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </View>
  );
};
