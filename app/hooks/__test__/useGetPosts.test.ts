import { act, renderHook } from "@testing-library/react-native";
import { useGetPosts } from "../useGetPosts";
import { getAllPosts } from "../../services/posts.service";

jest.mock("../../services/posts.service");

describe("useGetPosts", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("fetches posts and updates the state", async () => {
    const mockPosts = [
      { id: 1, title: "Post 1", body: "Body 1" },
      { id: 2, title: "Post 2", body: "Body 2" },
    ];

    (getAllPosts as jest.Mock).mockResolvedValue({
      posts: mockPosts,
    });

    const { result, rerender } = renderHook(() => useGetPosts(0));

    await act(async () => {
      await rerender(mockPosts);
    });

    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.isLoading).toBeFalsy();
  });

  it("handles errors", async () => {
    const errorMessage = "An error occurred";
    (getAllPosts as jest.Mock).mockRejectedValue({
      errorMessage,
    });

    const { result, rerender } = renderHook(() => useGetPosts(0));

    await act(async () => {
      await rerender({ errorMessage });
    });

    expect(result.current.posts).toEqual([]);
    expect(result.current.error).toEqual({ errorMessage: errorMessage });
    expect(result.current.isLoading).toBeFalsy();
  });
});
