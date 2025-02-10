export default defineNuxtRouteMiddleware((to, from) => {
	const auth = useState('auth')

	console.log(to)
	console.log(from)
	// if (!auth.value.isAuthenticated) {
		return navigateTo('/auth')
	// }
})
