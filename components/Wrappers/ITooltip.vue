<template>
	<div class="ITooltip" tabindex="0">
		<UTooltip :text="props.tipText" :popper="{ arrow: true, placement: props.isPlacement ?? 'top', }">
			<IIcon name="i-mdi:progress-question" size='1.8rem'/>
			<slot />
		</UTooltip>
	</div>
</template>
<script setup lang="ts">
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

const triggerClickOutside = () => {
	console.log('вне')
}
</script>
<style scoped lang="sass">
.ITooltip
	+flex
</style>
