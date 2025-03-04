export const apiSignIn = async (
  email: string,
  password: string,
  isRemember?: boolean
) => {
  const appStore = useAppStore();
  const response = await useApiFetch({
    path: "api/signin",
    method: "POST",
    body: {
      email: email,
      password: password,
    },
    isDisableTokenHead: true,
  }).then((res): ApiResError | boolean => {
    if (res) {
      if (res.type === "data") {
        clearStores();
        appStore.setIsBrief(res.value.isBrief);
        if (!appStore.getIsBrief) {
          navigateTo("/brief");
        } else {
          const [path, query] = appStore.getBeforeAuthPath.length
            ? [appStore.getBeforeAuthPath, appStore.getBeforeAuthQuery]
            : ["/"];
          appStore.setBeforeAuthPath();
          appStore.setBeforeAuthQuery();
        }
        return true;
      } else if (res.type === "error") {
        return res.value as string;
      }
    }
    return false;
  });
  return response;
};
