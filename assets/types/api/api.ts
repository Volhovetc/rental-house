declare global {
	type ApiMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'

	type ApiResError = ICaughtError | string | undefined
	type ApiResponseType = 'data' | 'error'
	
	interface IResponse {
		type: ApiResponseType
		value: any
	}

	interface ICaughtError {
		statusCode: number
		error: string
	}
}
