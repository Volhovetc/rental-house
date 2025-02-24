export const apiSignIn = async (email: string, password: string, isRemember?: boolean) => {
	const appStore = useAppStore()
	const tokenStore = useTokenStore()
	const response = await useApiFetch({
		path: 'api/signin',
		method: 'POST',
		body: {
			email: email,
			password: password,
		},
		isDisableTokenHead: true
	}).then((res): ApiResError | boolean => {
		if (res) {
			if (res.type === 'data') {
				
				clearStores()
				// TODO: настроить isRemember
				tokenStore.setAccessToken(res.value.token, true)
				appStore.setIsBrief(res.value.isBrief)

				if (!appStore.getIsBrief) {
					routeTo('/brief')
				} else {
					const [path, query] = appStore.getBeforeAuthPath.length ? [appStore.getBeforeAuthPath, appStore.getBeforeAuthQuery] : ['/']
					routeTo(path, query)
					appStore.setBeforeAuthPath()
					appStore.setBeforeAuthQuery()
				}

				return true
			} else if (res.type === 'error') {
				return res.value as string
			}
		}
		return false
	})
	return response
}
