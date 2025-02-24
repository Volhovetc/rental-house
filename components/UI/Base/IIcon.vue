<template>
	<UIcon class="IIcon" :name="props.name" :style="props.style ?? 'color: var(--white)'" :size="props.size ?? '2rem'" />
</template>

<script lang="ts" setup>
import type { Icon } from '~/assets/types/components/UI/Single'

const props = defineProps<Icon>()
</script>

<style lang="sass" scoped></style>
