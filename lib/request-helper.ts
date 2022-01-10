export interface Response<T> {
  status: boolean;
  data: T;
}

export class RequestHelper {
  static async get<T>(url: string, headers: HeadersInit): Promise<Response<T>> {
    const temp = await fetch(url, {
      headers,
      method: "get",
    });
    return temp.json();
  }

  static async post<ReqBody, ResBody>(
    url: string,
    headers: HeadersInit,
    reqBody: ReqBody
  ): Promise<Response<ResBody>> {
    const temp = await fetch(url, {
      headers,
      method: "post",
      body: JSON.stringify(reqBody),
    });
    return temp.json();
  }
}
