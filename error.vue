<template>
	<div class="rentalHouseApp">
		Куда пришел?
		<nav class="flex">
			<ul class="flex gap-2">
				<li><NuxtLink to="/auth">auth</NuxtLink></li>
				<li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
				<li><NuxtLink to="/brief">brief</NuxtLink></li>
			</ul>
		</nav>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="sass">
.rentalHouseApp
	+flex(column)
	width: 100%
	height: 100svh
	background-image: var(--background-image)
</style>
