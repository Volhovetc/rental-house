export const apiBriefSubmit = async (body) => {
	const response = await useApiFetch({
		path: 'api/base/data',
		method: 'POST',
		body: body,
	}).then((res): ApiResError | boolean => {
		if (res) {
			if (res.type === 'data') {
				return true
			} else if (res.type === 'error') {
				return res.value as string
			}
		}
		return false
	})
	return response
}
