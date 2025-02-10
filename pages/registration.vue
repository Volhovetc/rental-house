<template lang="pug">
.center
	.container(v-if="response")
		h1.display-4.m-b-2 Введите пароль из письма
		.form
			.form-group
				label(for='pw') Пароль:
				input#pw.form-control(type='password' name='password' v-model="passwordMail")
			button.btn.btn-primary(type='submit' @click="passwordCheck()") Войти
	.container(v-else)
		h1.display-4.m-b-2 Заполните данные
		.form
			.form-group
				label(for='name') Имя:
				input#name.form-control(type='text', placeholder='Введите имя' name='name' v-model="name")
			.form-group
				label(for='email') Фамилия:
				input#email.form-control(type='text', placeholder='Введите фамилию' name='surname' v-model="surname")
			.form-group
				label(for='pw') Электронная почта:
				input#pw.form-control(type='email' placeholder='e@mail' name='email' v-model="email")
			.form-group
				label(for='name') Пароль:
				input#name.form-control(type='password', placeholder='Придумайте пароль' name='password' v-model="passwordUser")
			button.btn.btn-primary(type='submit'  @click="mailPost()") Отправит заявку
</template>

<script setup lang="ts">
const name = ref("");
const surname = ref("");
const email = ref("");
const passwordUser = ref("");
const passwordMail = ref("");
const response = ref(false);
const responseDataEmail = ref("");

const responseDataValue = (data: any) => {
  if (data.status == 200) {
    responseDataEmail.value = data.email;
    response.value = true;
  }
};
const responsePasswordValue = (data: any) => {
  const { status, message, token, userID } = data;
  if (status == 200) {
    localStorage.setItem("AuthUserToken", JSON.stringify({ token, userID }));
    navigateTo({
      path: "/",
    });
  }
};

const mailPost = async () => {
  try {
    const response = await fetch(`http://localhost:8888/api/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: name.value,
        surname: surname.value,
        email: email.value,
        passwordUser: passwordUser.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        responseDataValue(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {}
};

const passwordCheck = async () => {
  try {
    const response = await fetch(
      `http://localhost:8888/api/auth/registration`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          email: email.value,
          passwordMail: passwordMail.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        responsePasswordValue(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {}
};
</script>
<style scoped lang="sass">
.center
	display: flex
	justify-content: center
	align-items: center
	height: 100vh
	.container
		width: 40%
		padding: 30px
		display: block
		margin-top: 0em
		unicode-bidi: isolate
		direction: ltr
		font-family: inherit
		font-style: normal
		font-weight: normal
		font-size: 1rem
		line-height: 1.5
		color: #212529
		border: 1px solid #dee2e6
		border-radius: 0.25rem
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
		h1
			display: flex
			align-items: center
			justify-content: center
			font-size: 2.5rem
			margin-bottom: 1rem
			font-weight: bold
			color: #212529
		.form
			width: 95%
			padding: 30px
			display: block
			margin-top: 0em
			unicode-bidi: isolate
			direction: ltr
			font-family: inherit
			font-style: normal
			font-weight: normal
			font-size: 1rem
			line-height: 1.5
			color: #212529
			border: 1px solid #dee2e6
			border-radius: 0.25rem
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
			input, button
				margin-bottom: 1rem
				width: 100%
				padding: 0.5rem 1rem
				font-size: 1rem
				line-height: 1.5
				color: #495057
				background-color: #fff
				border: 1px solid #ced4da
				border-radius: 0.25rem
				transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
				&:focus
					border-color: #86b9ff
					outline: none
					&::placeholder
						color: #86b9ff
						opacity: 1
						transition: opacity 0.3s ease-in-out
						&:hover
							opacity: 0.75
							transition: opacity 0.3s ease-in-out
</style>
