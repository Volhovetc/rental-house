export const apiSignUp = async (email: string) => {
	const response = await useApiFetch({
		path: 'api/signup',
		method: 'POST',
		body: {
			email: email,
		},
		isDisableTokenHead: true
	}).then((res): boolean | string => {
		if (res) {
			if (res.type === 'data') {
				return res.value as boolean
			} else if (res.type === 'error') {
				return res.value as string
			}
		}
		return false
	})
	return response
}
