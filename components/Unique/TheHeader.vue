<template>
  <div class="header-wrapper">
    <div class="upSide">
      <div class="search-bar">
        <input type="text" placeholder="Поиск сотруников, документов, ..." />
      </div>
      <div class="time-bar">{{ timer }}</div>
      <div class="user-profile">
        <img :src="user?.avatar" alt="..." />
        <div class="user-name">{{ user?.surname }}</div>
        <div class="user-surname">{{ user?.name }}</div>
      </div>
      <div class="logout-button" @click="logout">Logout</div>
    </div>
    <div class="middleSide">
      <div class="menu-item">Home</div>
      <div class="menu-item">About</div>
      <div class="menu-item">Services</div>
      <div class="menu-item">Contact</div>
      <div class="menu-item">Portfolio</div>
      <div class="menu-item">Blog</div>
      <div class="menu-item">FAQ</div>
      <div class="menu-item">Support</div>
    </div>
    <div class="downSide">
      <div class="social-media-icons">
        <a href="#"><img src="/" alt="Facebook" /></a>
        <a href="#"><img src="/" alt="Twitter" /></a>
        <a href="#"><img src="/" alt="Instagram" /></a>
        <a href="#"><img src="/" alt="YouTube" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.header-wrapper
	display: inline
	width: 80%
	height: 140px
	display: flex
	flex-direction: column
	background-color: #f2f2f2
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
	.upSide
		width: 100%
		display: flex
		flex-direction: row
		align-items: center
		justify-content: space-around
		.search-bar
			display: flex
			align-items: center
			justify-content: center
			width: 50%
			input
				width: 98%
				padding: 10px
				border: none
				border-radius: 5px
				background-color: #fff
				outline: none
				border: 2px solid #ccc
				transition: background-color 0.3s ease-in-out
				&:focus
					background-color: #f5f5f5
					border: 2px solid #f5f5f5
					&:hover
						background-color: #f9f9f9
					&:active
						background-color: #fafafa
						border: 2px solid #fafafa

		.time-bar
			font-size: 50px
			margin-bottom: 10px
			width: 10%
			display: flex
			justify-content: center
			align-items: center
		.user-profile
			display: flex
			align-items: center
			justify-content: center
			width: 15%
			img
				width: 50px
				height: 50px
				border-radius: 50%
				object-fit: cover
			div
				margin-left: 10px
				font-size: 16px
				font-weight: 600
				color: #333
		.logout-button
			display: flex
			align-items: center
			justify-content: center
			width: 5%
			height: 20px
			background-color: #f44336
			color: #fff
			font-size: 16px
			border: none
			border-radius: 5px
			cursor: pointer
			transition: background-color 0.3s ease-in-out
			&:hover
				background-color: #e5e5e5

	.middleSide
		width: 100%
		display: flex
		flex-direction: row
		align-items: center
		justify-content: space-around
		margin-top: 10px
		.menu-item
			width: 20%
			font-size: 18px
			font-weight: 400
			cursor: pointer
			transition: background-color 0.3s ease-in-out
			&:hover
				background-color: #f5f5f5
	.downSide
		width: 100%
		display: flex
		flex-direction: row
		align-items: center
		justify-content: space-around
		margin-top: 10px
		.social-media-icons
			display: flex
			align-items: center
			justify-content: space-around
			width: 30%
			a
				width: 30px
				height: 30px
				border-radius: 50%
				overflow: hidden
				img
					width: 100%
					height: 100%
</style>

<script setup lang="ts">
import { apiGetProfile } from "~/composables/api/profile";

interface IUser {
  name?: string;
  surname?: string;
  lastname?: string;
  phoneNumber?: string;
  avatar?: string;
}

const user = ref<IUser>();
const timer = ref(new Date().getHours() + ":" + new Date().getMinutes());
const setPageData = async () => {
  const response = await $fetch<IResponse>(
    "http://localhost:8888/api/profile",
    {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      credentials: "include",
    }
  );
  if (response) {
    return (user.value = response.value);
  }
};
setPageData();
// onMounted(() => {
//   setInterval(() => {
//     let minutes: any = new Date().getMinutes();
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     timer.value = new Date().getHours() + ":" + minutes;
//   }, 1000 * 60);
// });

const logout = async () => {
  const response = await $fetch<IResponse>("http://localhost:8888/api/logout", {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    credentials: "include",
  });
  if (response) {
  }
};
</script>
