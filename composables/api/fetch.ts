interface IApiData {
  path: string;
  method: ApiMethod;
  body: any;
  isDisableTokenHead?: boolean;
}

export const useApiFetch = async ({
  path,
  method,
  body,
  isDisableTokenHead,
}: IApiData) => {
  try {
    const response = await $fetch<IResponse>("http://localhost:8888/" + path, {
      method: method,
      body: body,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      credentials: "include",
    });
    if (response) {
      return response;
    }
  } catch {}
};
