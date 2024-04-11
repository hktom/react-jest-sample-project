import Http from "@/helpers/http/http";
import Post from "@/helpers/post/post";
import { IPost } from "@/helpers/post/postInterfcae";
import axios from "axios";

beforeAll(() => {
  jest.mock("axios");
});

test("post Id is between 1 and 100", async () => {
  // ARRANGE
  const fakePost: IPost[] = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ];
  axios.get = jest.fn().mockResolvedValue({ data: fakePost, code: 200 });
  const http = new Http(axios);
  const post = new Post(http);
  //   ACT
  const { data, error, code } = await post.getPosts(1);
  // ASSERT
  expect(code).toBe(200);
});

test("post Id is not between 1 and 100", async () => {
  // ARRANGE
  const fakePost: IPost[] = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ];
  axios.get = jest.fn().mockResolvedValue({ data: fakePost, code: 200 });
  const http = new Http(axios);
  const post = new Post(http);
  //   ACT
  const { data, error, code } = await post.getPosts(150);
  // ASSERT
  expect(code).toBe(404);
});

test("get 3 posts", async () => {
  // ARRANGE
  const fakePost: IPost[] = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ];
  axios.get = jest.fn().mockResolvedValue({ data: fakePost, code: 200 });
  const http = new Http(axios);
  const post = new Post(http);
  //   ACT
  const { data, error, code } = await post.getPostsById("2 4 5");
  // ASSERT
  expect(data.length).toBe(3);
});
