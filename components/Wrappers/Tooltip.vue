<template lang='pug'>
.Tooltip
	UTooltip(
		:text='props.tipText'
		:popper='{ arrow: true, placement: props.isPlacement ?? "top" }')
		Icon(name="i-custom:quest" style="color: white" size="1.4rem")
</template>
<script setup lang='ts'>
type Placement = 'top' | 'right' | 'bottom' | 'left'

interface Props {
	/** Текст тултипа */
	tipText?: LabelText
	/** Управление отображением из родителя */
	isDisableHover?: boolean
	/** Отключить всплытие */
	isDisableShow?: boolean
	isPlacement?: Placement
}

const props = defineProps<Props>()
</script>
<style scoped lang='sass'>
.Tooltip
</style>
