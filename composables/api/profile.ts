interface IUser {
  name: string;
  surname: string;
  lastname: string;
  phoneNumber: string;
}

interface ApiRes {
  type: "data";
  value: IUser;
}

export const apiGetProfile = async () => {
  const response = await useApiFetch({
    path: "api/profile",
    method: "GET",
    body: "",
  }).then((res): {} | ApiRes => {
    console.log(1);
    if (res)
      if (res.type === "data") return res.value;
      else return {};
    else return {};
  });
  return response;
};
