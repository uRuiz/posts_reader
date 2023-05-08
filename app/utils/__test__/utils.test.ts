// utils.test.ts
import { sortPosts } from "../utils";
import { Post } from "../../types/types";

const posts: Post[] = [
  {
    id: 1,
    title: "Post 1",
    body: "Body 1",
    userId: 1,
    tags: ["Tag1", "Tag2"],
    reactions: 1,
  },
  {
    id: 2,
    title: "Post 2",
    body: "Body 2",
    userId: 2,
    tags: ["Tag1", "Tag2"],
    reactions: 2,
  },
  {
    id: 3,
    title: "Post 3",
    body: "Body 3",
    userId: 3,
    tags: ["Tag1", "Tag2"],
    reactions: 3,
  },
  {
    id: 4,
    title: "Post 4",
    body: "Body 4",
    userId: 4,
    tags: ["Tag1", "Tag2"],
    reactions: 4,
  },
];
describe("sortPosts", () => {
  it("sorts posts putting favorite posts first", () => {
    const favoritePosts = [3, 1];

    const sortedPosts = sortPosts(posts, favoritePosts);

    expect(sortedPosts).toEqual([
      {
        id: 1,
        title: "Post 1",
        body: "Body 1",
        userId: 1,
        tags: ["Tag1", "Tag2"],
        reactions: 1,
      },
      {
        id: 3,
        title: "Post 3",
        body: "Body 3",
        userId: 3,
        tags: ["Tag1", "Tag2"],
        reactions: 3,
      },
      {
        id: 2,
        title: "Post 2",
        body: "Body 2",
        userId: 2,
        tags: ["Tag1", "Tag2"],
        reactions: 2,
      },
      {
        id: 4,
        title: "Post 4",
        body: "Body 4",
        userId: 4,
        tags: ["Tag1", "Tag2"],
        reactions: 4,
      },
    ]);
  });

  it("returns the original order if no favorites are present", () => {
    const favoritePosts: number[] = [];

    const sortedPosts = sortPosts(posts, favoritePosts);

    expect(sortedPosts).toEqual(posts);
  });
});
