interface IApiData {
	path: string
	method: ApiMethod
	body: any
}

export const useApiFetch = async ({ path, method, body }: IApiData) => {
	console.log(method)
	const response = await $fetch<IResponse>('http://103.88.241.236:8887/' + path, {
		method: method,
		body: body,
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		onRequest({ request, options }) {

			console.log('onRequest')
			console.log(request)
		},
		onRequestError({ request, options, error }) {

			console.log('onRequestError')
			console.log(request)
			console.log(error)
		},
		onResponse({ request, response, options }) {

			console.log('onResponse')
			console.log(response)
		},
		onResponseError({ request, response, options }) {

			console.log('onResponseError')
			console.log(response)
		},
	})
	if (response) {
		return response
	}
}
