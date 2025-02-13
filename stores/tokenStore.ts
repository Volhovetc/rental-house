import _ from 'lodash'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
	'tokenStore',
	() => {
		// Stab (вынесен для очистки стора)
		const tokenStab = {
			value: '',
			expire: NaN,
		}

		// State
		const accessTokenSession = ref(_.cloneDeep(tokenStab))

		const accessTokenLocal = ref(_.cloneDeep(tokenStab))

		// Getters
		const isAuth = computed(() => {
			const token = getToken.value
			if (token) {
				return _checkToken(token.expire)
			}
			console.error('tokenStore | isAuth', 'default', 'Токен отсутствует')
			return false
		})

		const getToken = computed(() => {
			let sessionToken = accessTokenSession.value
			let localToken = accessTokenLocal.value
			console.log('tokenStore | getToken', 'default', `Сессионный токен ${sessionToken.value.length ? sessionToken.value : 'пуст'}`)
			console.log('tokenStore | getToken', 'default', `Локальный токен ${localToken.value.length ? localToken.value : ' пуст'}`)
			if (sessionToken && sessionToken.value && sessionToken.value.length) {
				console.log('tokenStore | getToken', 'default', 'Используется сессионный токен')
				return sessionToken
			} else if (localToken && localToken.value && localToken.value.length) {
				console.log('tokenStore | getToken', 'default', 'Используется локальный токен')
				return localToken
			}
			console.log('tokenStore | getToken', 'default', 'Токен отсутствует')
			return undefined
		})

		// Actions
		const setAccessToken = (token?: string, isRemember?: boolean) => {
			if (!token) {
				clearStore()
				return
			}
			const newToken = {
				value: token,
				expire: decodeJwt(token).exp,
			}
			if (isRemember) {
				accessTokenLocal.value = newToken
			} else {
				accessTokenSession.value = newToken
			}
		}

		const clearStore = () => {
			accessTokenLocal.value = _.cloneDeep(tokenStab)
			accessTokenSession.value = _.cloneDeep(tokenStab)
		}

		// Private
		const _checkToken = (accessTokenExpire: number): boolean => {
			if (accessTokenExpire > Date.now() / 1000) {
				console.log('tokenStore | _checkToken', 'default', 'Токен валидный')
				return true
			} else {
				console.log('tokenStore | _checkToken', 'default', 'Токен протух')
				// apiSignOut()
				return false
			}
		}

		return {
			accessTokenSession,
			accessTokenLocal,
			isAuth,
			getToken,
			setAccessToken,
			clearStore,
		}
	},
	{
		persist: [
			{
				storage: piniaPluginPersistedstate.localStorage(),
				pick: ['accessTokenLocal'],
			},
			{
				storage: piniaPluginPersistedstate.sessionStorage(),
				pick: ['accessTokenSession'],
			},
		],
	}
)
