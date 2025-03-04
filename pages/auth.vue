<template>
  <div class="Auth">
    <div class="wrapper">
      <div :class="['wrapperAuthComponents', { activeSignUp: control.sign }]">
        <div class="signIn">
          <div class="wrapperInput">
            <IInput
              v-model="state.email.value"
              label="Электронная почта"
              name="email"
              placeholder="введите вашу почту"
              autocomplete
              tipText="Введите пожалуйста вашу почту"
              :isAutofocus="!control.sign"
            />
            <IInput
              v-model="state.password.value"
              label="Пароль"
              type="password"
              name="password"
              tipText="Введите пожалуйста ваш пароль"
              placeholder="введите ваш пароль"
              autocomplete
            />
          </div>
          <div class="wrapperButtonsColumn">
            <div class="wrapperButtonsRow">
              <IButton class="fullWidth" label="Забыли пароль?" @onClick="" />
              <IButton
                class="fullWidth"
                label="регистрация"
                @onClick="handleSign"
              />
            </div>
            <IButton
              class="fullWidth focusClass"
              label="Войти"
              @onClick="signIn"
            />
          </div>
        </div>
        <div class="signUp">
          <div class="wrapperInput flex h-full items-center">
            <IInput
              v-model="state.email.value"
              label="Электронная почта"
              name="email"
              placeholder="введите вашу почту"
              autocomplete
              tipText="Введите пожалуйста вашу почту"
              :isAutofocus="control.sign"
            />
          </div>
          <div class="wrapperButtonsColumn">
            <div class="wrapperButtonsRow">
              <IButton
                class="fullWidth"
                label="вернуться"
                @onClick="handleSign"
              />
            </div>
            <IButton
              class="fullWidth focusClass"
              :label="
                control.signUp
                  ? 'Регистрация'
                  : 'Получить письмо для регистрации'
              "
              @onClick="signUp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const state = ref({
  email: {
    value: "",
    error: "",
    isShowError: false,
  },
  password: {
    value: "",
    error: "",
    isShowError: false,
  },
  accepts: false,
});

const control = ref({
  sign: false,
  signUp: false,
});

// Запрос на регистрацию
const signUp = async () => {
  const email = state.value.email;
  const accepts = state.value.accepts;

  email.value = email.value.trim();

  state.value.email.isShowError = !!email.error;
  // accepts[0].error = accepts[0].isAccept ? '' : 'Необходимо принять Условия обработки персональных данных'
  // accepts[1].error = accepts[1].isAccept ? '' : 'Необходимо принять Условия платформы'

  // if (email.error || !accepts[0].isAccept || !accepts[1].isAccept) {
  // 	return
  // }
  // логика api запроса на регистрацию
  const res = await apiSignUp(email.value);
  // проверяем запрос на тип
  if (typeof res === "boolean") {
    // отправляем на регистрацию
    // если false то уведомляем о том что пользователь получал письмо и отправляем на регистрацию
    if (!res) {
    }
    control.value.sign = false;
  } else {
    // обработка ошибки
    // pageError.value = res ? (typeof res === 'string' ? res : res.error) : 'Неизвестная ошибка'
  }
};

// Запрос на авторизацию
const signIn = async () => {
  const email = state.value.email;
  const password = state.value.password;

  email.value = email.value.trim();
  password.value = password.value.trim();

  state.value.email.isShowError = !!email.error;
  state.value.password.isShowError = !!password.error;

  // логика api запроса на авторизацию
  const res = await apiSignIn(email.value, password.value);
  // проверяем запрос на тип
  if (res) {
    routeTo("/dashboard");
    return;
  } else {
    // обработка ошибки
    // pageError.value = res ? (typeof res === 'string' ? res : res.error) : 'Неизвестная ошибка'
  }
};
const handleSign = () => {
  control.value.sign = !control.value.sign;
};

const handleSignUp = () => {
  if (control.value.signUp) {
  } else {
    control.value.signUp = true;
  }
};

const handleSubmit = () => {
  // useUser.user.fio.firstName = state.value.email
};
</script>
<style scoped lang="sass">
.Auth
	+flex
	height: 100%

	.wrapper
		+flex
		margin: auto
		border-radius: 1rem
		overflow: hidden

		.wrapperAuthComponents
			+flex(row, start, start, nowrap)
			width: 40rem
			+transition(transform)

			.signIn,
			.signUp
				+flex(column, space-between)
				min-width: 100%
				height: 100%
				padding: var(--padding-main-container)

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
