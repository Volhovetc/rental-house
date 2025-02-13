export const apiSignIn = async (email: string, password: string, isRemember?: boolean) => {
	const tokenStore = useTokenStore()
	const response = await useApiFetch({
		path: 'api/auth/signin',
		method: 'POST',
		body: {
			email: email,
			password: password,
		},
	}).then((res): ApiResError | boolean => {
		if (res) {
			if (res.type === 'data') {
				clearStores()
				tokenStore.setAccessToken(res.value.token, isRemember)
				console.log('accessTokenSession')
				console.log(tokenStore.accessTokenSession)
				console.log('accessTokenLocal')
				console.log(tokenStore.accessTokenLocal)
				return true
			} else if (res.type === 'error') {
				return res.value as string
			}
		}
		return false
	})
	return response
}
