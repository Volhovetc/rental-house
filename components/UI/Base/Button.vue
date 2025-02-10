<template lang='pug'>
.Button(
	:tabindex='props.isDisabled ? -1 : 0'
	@click='handleClick($event)')
	Label.cursorPointer(:text='props.label')
</template>

<script lang='ts' setup>
import type { Button } from '~/assets/types/components/UI/Single'

const props = defineProps<Button>()
const emit = defineEmits(['onClick'])

const handleClick = (e: Event) => {
	if (props.isStopPropagation) {
		e.stopPropagation()
	}
	emit('onClick', e)
}


</script>

<style lang="sass" scoped>
.Button
	+flex(row, center)
	padding: .5rem 1rem
	border-radius: .5rem
	border: .1rem solid transparent
	background-image: var(--background-image)
	cursor: pointer
	+transition(border)
	
	&:hover
		color: var(--textLabel-active)
		border-color: var(--green-light)

	&.fullWidth
		width: 100%

	// цвета
	&.focusClass
		background-image: var(--background-image-focus)
		
</style>
