import Http from "@/helpers/http/http";
import { IPost } from "@/helpers/post/postInterfcae";
import axios from "axios";

beforeAll(() => {
  jest.mock("axios");
});

test("Http", async () => {
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
  //   ACT
  const { code } = await http.get("/posts");

  // ASSERT
  expect(code).toBe(200);
});
