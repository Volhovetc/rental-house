export default defineNuxtRouteMiddleware((to, from) => {
	const auth = useState('auth')

	// if (!auth.value.isAuthenticated) {
	// 	return navigateTo('/login')
	// }
})
