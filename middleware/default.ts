export default defineNuxtRouteMiddleware((to, from) => {
	const appStore = useAppStore()
	// appStore.resetLoading()

	const splitPath = (name: string) => {
		return {
			to: from.path.split('/')[1] === name,
			from: from.path.split('/')[1] === name,
		}
	}

	const BRIEF = splitPath('brief')

	const DASHBOARD = splitPath('dashboard')

	const AUTH = splitPath('auth')

	if (useTokenStore().isAuth) {
		// Пользователь авторизован
		const isBrief = appStore.getIsBrief

		if (to.path.split('/')[1] === 'auth' && from.path.split('/')[1] !== 'auth') {
			// Редирект обратно при переходе авторизованного пользователя из проекта в авторизацию
			return navigateTo(from.path)
		} else if (to.path.split('/')[1] === 'auth') {
			// Резервный редирект при любом другом переходе авторизованного пользователя в авторизацию
			return navigateTo('/')
		} else if (from.path !== '/brief' && to.path !== '/brief' && !isBrief) {
			// Пользователь авторизован, но не прошел бриф - редирект на бриф
			return navigateTo('/brief')
		} else if (to.path.split('/')[1] === 'brief' && isBrief) {
			// Пользователь авторизован, прошел бриф, но переходит на бриф - редирект обратно
			return navigateTo('/')
		} else if (BRIEF.to || BRIEF.from) {
			// Бриф ушел пришел , пользователь авторизован
			if (BRIEF.to) {
				// Бриф пришел , пользователь авторизован
				return isBrief ? navigateTo(from) : navigateTo(to)
			} else if (BRIEF.from) {
				// Бриф ушел , пользователь авторизован
				return isBrief ? navigateTo(to) : navigateTo(from)
			}
		}
	} else if (to.path.split('/')[1] !== 'auth') {
		// Редирект неавторизованного пользователя в авторизацию
		appStore.setBeforeAuthPath(to.path)
		appStore.setBeforeAuthQuery(to.query)
		return navigateTo('/auth')
	}
})
