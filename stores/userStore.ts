import _ from 'lodash'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
	'userStore',
	() => {
		// Stab (вынесен для очистки стора)
		const userStab = {
			fio: {
				firstName: undefined as string | undefined,
				middleName: undefined as string | undefined,
				lastName: undefined as string | undefined,
			},
		}

		// State
		const user = ref({
			fio: {
				firstName: undefined as string | undefined,
				middleName: undefined as string | undefined,
				lastName: undefined as string | undefined,
			},
		})

		return {
			user,
		}
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.localStorage(),
			pick: ['user'],
			key: 'user'
		},
	}
)
