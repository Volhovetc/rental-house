<template>
	<div class="Brief">
		<div class="wrapperContent">
			<div class="wrapperInput">
				<IInput v-model="state.surname" label="Фамилия" tipText="Введите пожалуйста вашу фамилию" isRequired />
				<IInput v-model="state.name" label="Имя" tipText="Введите пожалуйста ваше имя" isRequired />
				<IInput v-model="state.lastname" label="Отчество" tipText="Введите пожалуйста ваше отчество" />
				<IInput v-model="state.phoneNumber" label="Номер телефона" tipText="Введите пожалуйста ваш номер телефона" isRequired />
			</div>
			<div class="wrapperButtons">
				<IButton class="fullWidth" label="Сохранить" @onClick="submitBrief" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const state = ref({
	name: '',
	surname: '',
	lastname: '',
	phoneNumber: '',
})

const submitBrief = async () => {
	const res = await apiBriefSubmit(state.value)
	if (res) {
		console.log(res)
		return
	}
}
</script>
<style scoped lang="sass">
.Brief
	+flex
	height: 100%

	.wrapperContent
		width: 50%
		margin: auto
		padding: var(--padding-main-container)
		border-radius: 1rem
		background-image: var(--background-image-dark)

		.wrapperInput


		.wrapperButtons
			+flex
</style>
