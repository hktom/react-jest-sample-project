import Http from "../http/http";
import { IResponse } from "../http/httpInterface";
import { IPostInterface } from "./postInterfcae";

class Post implements IPostInterface {
  constructor(private http: Http) {}

  async getPosts(id: number): Promise<IResponse> {
    if (id < 1 || id > 100) {
      return {
        error: "Id must be between 1 and 100",
        code: 404,
        data: null,
      };
    }

    return await this.http.get(`/posts/${id}`);
  }

  async getPostsById(ids: string): Promise<IResponse> {
    // check if ids only got numbers
    if (ids.match(/[A-Za-z]/g)) {
      return {
        error: " Ids must be number only",
        code: 500,
        data: null,
      };
    }

    const idArray = ids.split(",").map((i) => parseInt(i));
    let responseData: any[] = [];

    idArray.forEach(async (id) => {
      const { data, code, error } = await this.getPosts(id);
      if (code === 200) {
        responseData.push(data);
      }
    });

    return { data: responseData, code: 200 };
  }
}

export default Post;
