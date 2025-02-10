<template lang="pug">
.TheAuth
	.wrapperAuthComponents(:class='{ activeSignUp : control.sign }')
		.signIn
			.wrapperInput
				Input(
					v-model='state.email'
					label='Электронная почта'
					name='email'
					placeholder='введите вашу почту'
					autocomplete
					tipText='Введите пожалуйста вашу почту'
					:isAutofocus='!control.sign')
				Input(
					v-model='state.password'
					label='Пароль'
					type='password'
					name='password'
					tipText='Введите пожалуйста ваш пароль'
					placeholder='введите ваш пароль'
					autocomplete)
			.wrapperButtonsColumn
				.wrapperButtonsRow
					Button.fullWidth.warning(
						label='Забыли пароль?'
						@onClick='') 
					Button.fullWidth(
						label='регистрация'
						@onClick='handleSign') 
				Button.fullWidth.focusClass(
					label='Войти'
					@onClick='loginApi()') 
		.signUp
			.wrapperInput
				Input(
					v-model='state.email'
					label='Электронная почта'
					name='email'
					placeholder='введите вашу почту'
					:isAutofocus='control.sign')
				Input(
					v-if='control.signUp'
					v-model='state.password'
					label='Код из письма'
					name='text'
					placeholder='введите код полученный в письме')
			.wrapperButtonsColumn
				.wrapperButtonsRow
					Button.fullWidth(
						v-if='control.signUp'
						label='повторить код'
						@onClick='') 
					Button.fullWidth(
						label='вернуться'
						@onClick='handleSign') 
				Button.fullWidth.focusClass(
					:label='control.signUp ? "Регистрация" : "получить письмо для регистрации"'
					@onClick='singUpApi()')
					 
</template>

<script setup lang="ts">
const loginApi = async () => {
  try {
    const response = await fetch(`http://localhost:8888/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        email: state.value.email,
        password: state.value.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {}
};

const singUpApi = async () => {
  try {
    const response = await fetch(`http://localhost:8888/api/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        email: state.value.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {}
  handleSignUp();
};

const state = ref({
  email: undefined,
  password: undefined,
});

const control = ref({
  sign: false,
  signUp: false,
});

const onSubmit = async () => {
  console.log(state.value);
};

const handleSign = () => {
  control.value.sign = !control.value.sign;
  console.log(control.value.sign);
};

const handleSignUp = () => {
  if (control.value.signUp) {
  } else {
    control.value.signUp = true;
  }
};
</script>
<style scoped lang="sass">
.TheAuth
	+flex
	margin: auto
	border-radius: 1rem
	overflow: hidden

	.wrapperAuthComponents
		+flex(row, start, start, nowrap)
		width: 30rem
		+transition(transform)

		.signIn,
		.signUp
			+flex(column, space-between)
			min-width: 100%
			height: 100%
			padding: 2rem

			.wrapperButtonsRow,
			.wrapperButtonsColumn
				gap: 1rem

			.wrapperButtonsRow
				+flex

			.wrapperButtonsColumn
				+flex(column)

		.signIn
			background-image: var(--background-image-dark)

		.signUp
			background-image: var(--background-image-dark-revers)

		&.activeSignUp
			transform: translateX(-100%)
</style>
