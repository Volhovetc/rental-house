interface decodedJwt {
	aud: string[]
	exp: number
	sub: string
}

export const decodeJwt = (jwt: string): decodedJwt => {
	return JSON.parse(
		decodeURIComponent(
			window
				.atob(jwt.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
				.split('')
				.map(c => {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
				})
				.join('')
		)
	)
}
