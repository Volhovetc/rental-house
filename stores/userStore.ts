import _ from 'lodash'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
	'userStore',
	() => {
		// Stab (вынесен для очистки стора)
		const userStab = {
		
		}

		// State
		const user = ref({
			
		})

		// Getters


		return {
			user,

		}
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.localStorage(),
			pick: ['user'],
			key: 'user',
		},
	}
)
