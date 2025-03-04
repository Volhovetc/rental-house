<template>
  <div class="aside-wrapper">
    <div class="aside-header">
      <div class="aside-logo">
        <img src="/" alt="Logo" />
      </div>
      <div class="aside-title">
        <span>Dashboard</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
.aside-wrapper
	background-color: #f8f9fa
	width: 20%
	height: 100vh
	display: flex
	flex-direction: column
	.aside-header
		width: 100%
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
		height: 100px
		background-color: #343a40
		color: #fff
		border-bottom: 1px solid #dee2e6
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1)
		&.aside-logo
			display: flex
			align-items: center
			justify-content: center
			width: 100%
			height: 50px
			img
				width: 30px
				height: 30px
				margin-bottom: 10px
</style>

<script lang="ts"></script>
