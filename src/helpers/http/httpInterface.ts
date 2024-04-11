export interface IResponse {
  code: number;
  error?: any;
  data: any;
}

export interface IHttpInterface {
  get: (url: string) => Promise<IResponse>;
}
