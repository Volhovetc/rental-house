import { defineStore } from 'pinia'
import type { LocationQueryRaw } from 'vue-router'

export const useAppStore = defineStore(
	'appStore',
	() => {
		// State
		const connection = ref({
			isNetwork: true,
			isServer: true,
		})

		const appState = ref({
			pageTitle: '',
			defaultColorMode: '',
			platform: '',
			components: {
				isNavCollapse: false,
			},
			isBrief: false,
			isLoading: [] as number[],
			isLoadingDate: undefined as number | undefined,
		})

		const url = ref({
			beforeAuth: {
				path: '/',
				query: undefined as LocationQueryRaw | undefined,
			},
			fromPath: '',
			personal: {
				company: {
					lastPath: 'identification-information',
				},
			},
		})

		const appInfo = ref({
			version: '0.0.0.1',
			supportContacts: {
				mail: 'support@pir-online.ru',
				telephone: '+78002344355',
				telegram: 'systempiron',
				whatsApp: 'K85UYUuGjrvJ2txKEKGNCP',
			},
		})

		// Events

		// Constructors
		const companyLastPath = computed({
			get() {
				return url.value.personal.company.lastPath
			},
			set(newValue) {
				url.value.personal.company.lastPath = newValue
			},
		})

		// Getters
		const getPageTitle = computed(() => appState.value.pageTitle)

		const getAppVersion = computed(() => appInfo.value.version)

		const getSupportContacts = computed(() => appInfo.value.supportContacts)

		const getBeforeAuthPath = computed(() => url.value.beforeAuth.path)

		const getBeforeAuthQuery = computed(() => url.value.beforeAuth.query)

		const getFromPath = computed(() => url.value.fromPath)

		const getIsNavCollapse = computed(() => appState.value.components.isNavCollapse)

		const getIsBrief = computed(() => appState.value.isBrief)

		const getIsLoading = computed(() => {
			const loadingDate = appState.value.isLoadingDate
			return appState.value.isLoading.length > 0 && !!loadingDate
		})

		// Actions
		const setPageTitle = (value?: string) => {
			appState.value.pageTitle = value && value.length ? value : ''
		}

		const setBeforeAuthPath = (path?: string) => {
			url.value.beforeAuth.path = path ?? '/'
		}

		const setBeforeAuthQuery = (query?: LocationQueryRaw) => {
			url.value.beforeAuth.query = query
		}

		const setFromPath = (path?: string) => {
			url.value.fromPath = path ?? ''
		}

		const setIsNavCollapse = (value?: boolean) => {
			appState.value.components.isNavCollapse = value ? value : !appState.value.components.isNavCollapse
		}

		const setIsBrief = (value?: boolean) => {
			appState.value.isBrief = !!value
		}

		const setLoading = (value: number) => {
			if (!appState.value.isLoading.length) {
				setTimeout(() => {
					if (appState.value.isLoading.length) {
						appState.value.isLoadingDate = Date.now()
					}
				}, 900)
			}
			appState.value.isLoading.push(value)
		}

		const disableLoading = (value: number) => {
			const index = appState.value.isLoading.findIndex(x => x === value)
			if (index > -1) {
				appState.value.isLoading.splice(index, 1)
			}
			if (appState.value.isLoading.length === 0) {
				appState.value.isLoadingDate = undefined
			}
		}

		const resetLoading = () => {
			appState.value.isLoading = []
			appState.value.isLoadingDate = undefined
		}

		return {
			connection,
			appState,
			url,
			appInfo,
			companyLastPath,
			getPageTitle,
			getAppVersion,
			getSupportContacts,
			getBeforeAuthPath,
			getBeforeAuthQuery,
			getFromPath,
			getIsNavCollapse,
			getIsBrief,
			getIsLoading,
			setPageTitle,
			setBeforeAuthPath,
			setBeforeAuthQuery,
			setFromPath,
			setIsNavCollapse,
			setIsBrief,
			setLoading,
			disableLoading,
			resetLoading,
		}
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.localStorage(),
			pick: ['appState', 'url'],
		},
	}
)
