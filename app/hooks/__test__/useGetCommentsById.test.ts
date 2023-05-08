import { act, renderHook } from "@testing-library/react-native";
import { useGetCommentsById } from "../useGetCommentsById";
import { getPostCommentsById } from "../../services/posts.service";

jest.mock("../../services/posts.service");

describe("useGetCommentsById", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("fetches comments for a post", async () => {
    const mockComments = [
      { id: 1, body: "Test Comment 1" },
      { id: 2, body: "Test Comment 2" },
    ];

    (getPostCommentsById as jest.Mock).mockResolvedValue({
      comments: mockComments,
    });

    const { result, rerender } = renderHook(() => useGetCommentsById(1));

    await act(async () => {
      await rerender(mockComments);
    });

    expect(result.current.comments).toEqual(mockComments);
    expect(result.current.loading).toBeFalsy();
  });

  it("handles errors", async () => {
    const errorMessage = "An error occurred";
    (getPostCommentsById as jest.Mock).mockRejectedValue({
      errorMessage,
    });

    const { result, rerender } = renderHook(() => useGetCommentsById(1));

    await act(async () => {
      await rerender({ errorMessage });
    });

    expect(result.current.comments).toBeFalsy();
    expect(result.current.error).toEqual({ errorMessage: errorMessage });
    expect(result.current.loading).toBeFalsy();
  });
});
