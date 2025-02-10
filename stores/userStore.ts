import { defineStore } from 'pinia'

export const useUserStore = defineStore(
	'userStore',
	() => {
		const userStab = {
			userName: {
				firstName: undefined as string | undefined,
				middleName: undefined as string | undefined,
				lastName: undefined as string | undefined,
			},
		}
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.localStorage(),
		},
	}
)
