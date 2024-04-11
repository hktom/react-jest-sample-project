import { IHttpInterface, IResponse } from "./httpInterface";

class Http implements IHttpInterface {
  private baseUrl: string;

  constructor(private axios: any) {
    // TODO later use env variable
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  async get(url: string): Promise<IResponse> {
    try {
      const res = await this.axios.get(`${this.baseUrl}${url}`);
      return {
        code: 200,
        data: res.data,
      };
    } catch (error: any) {
      return {
        code: 500,
        error: "an error occured",
        data: null,
      };
    }
  }
}

export default Http;
