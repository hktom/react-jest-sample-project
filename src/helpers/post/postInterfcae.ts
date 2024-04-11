import { IResponse } from "../http/httpInterface";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostInterface {
  getPosts: (id:number) => Promise<IResponse>;
  getPostsById: (ids:string) => Promise<IResponse>;

}
