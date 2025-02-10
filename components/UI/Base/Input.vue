<template lang="pug">
.Input
	.wrapperHeader
		Label.textNowrap(
			fontSize='1rem'
			:text='props.label')
		Tooltip(
			v-if='props.tipText'
			isPlacement='left' 
			:tipText='props.tipText')
	input(
		v-model='value'
		ref='inputRef'
		:autocomplete='props.autocomplete ?? "off"',
		:disabled='props.isDisabled || props.isCheckBoxDisableContent && !isChecked'
		:pattern='props.pattern'
		:placeholder='props.placeholder'
		:readonly='props.isReadonly'
		:spellcheck='false'
		:tabindex='props.isDisabled ? -1 : 0'
		:name='props.name'
		:type='control.isShowPassword ? "text" : props.type'
		@input='handleInput'
		@focus='handleInputFocus'
		@blur='handleInputBlur'
		@keyup='handleInputKeyUp'
		@keyup.enter='handleKeyUpEnter'
		@click.stop='handleInputClick')
</template>

<script lang="ts" setup>
import type { Input } from '~/assets/types/components/UI/Single'

const props = defineProps<Input>()

const value = defineModel<string | undefined>()

const inputRef = defineModel<HTMLInputElement>('inputRef')

const control = ref({
	isShowPassword: false
})

const emit = defineEmits(['onEnter', 'onClick', 'onFocus', 'onBlur', 'onKeyUp', 'onInput'])

const handleInput = () => {
	emit('onInput')
}

const handleInputFocus = () => {
	emit('onFocus')
}

const handleInputBlur = () => {
	emit('onBlur')
}

const handleInputKeyUp = (event: KeyboardEvent) => {
	emit('onKeyUp', event)
}

const handleKeyUpEnter = () => {
	emit('onEnter')
}

const handleInputClick = () => {
	emit('onClick')
}

const setFocus = () => {
	if (inputRef.value) {
		inputRef.value.focus()
	}
}

onMounted(() => {
	nextTick(() => {
		if (props.isAutofocus) setFocus()
	})
})
</script>

<style lang="sass" scoped>
.Input
	position: relative
	width: 100%
	padding-top: .6rem

	.wrapperHeader
		position: absolute
		top: 0
		left: 1rem
		+flex(row, space-between, start)
		width: calc( 100% - 2rem )

		.Label
			padding: .2rem 1rem
			border-radius: .5rem
			background-image: var(--background-image)

	input
		width: 100%
		margin-bottom: 1rem
		background: rgba(0,0,0,0.3)
		border: none
		outline: none
		padding: 1rem
		font-size: 1.2rem
		color: #fff
		text-shadow: 1px 1px 1px rgba(0,0,0,0.3)
		border: .1rem solid rgba(0,0,0,0.3)
		border-radius: .5rem
		box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2)
		-webkit-transition: box-shadow .5s ease
		-moz-transition: box-shadow .5s ease
		-o-transition: box-shadow .5s ease
		-ms-transition: box-shadow .5s ease
		transition: box-shadow .5s ease
</style>
