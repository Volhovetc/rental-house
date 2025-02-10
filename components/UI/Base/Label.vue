<template lang="pug">
.Label(
	v-if='props.text || $slots.default'
	:class='{ multi: typeof props.text === "object", link: props.linkTo }'
	:style='{ fontSize: props.fontSize, lineHeight: props.lineHeight, color: props.color, backgroundColor: props.backgroundColor }'
	@click='handleLabelClick')
	template(v-if='props.text && typeof props.text === "string"')
		.text(v-html='text')
	template(v-if='props.text && typeof props.text === "object"')
		.text(
			v-for='text, i in props.text'
			:key='`Label_${text}_${i}`'
			v-html='text')
	span.required(v-if='props.isRequired') *
	slot
</template>

<script lang="ts" setup>
interface Props {
	text?: LabelText
	linkTo?: string
	fontSize?: string
	lineHeight?: SizeCSS
	color?: string
	isRequired?: boolean
	backgroundColor?: string
}

const props = defineProps<Props>()

const handleLabelClick = () => {
	if (props.linkTo) {
		routeTo(props.linkTo)
	}
}
</script>

<style lang="sass" scoped>
.Label
	+flex($justify-content: left)
	width: fit-content
	font-size: 1.2rem
	line-height: 100%
	font-weight: 400
	cursor: default
	+transition(color)

	.required
		margin-left: 1px
		color: red

	&.alignItemsCenter
		+flex($align-items: center)

	&.textCenter
		text-align: center

	&.textRight
		text-align: right

	&.displayBlock
		display: block

	&.textNowrap
		text-wrap: nowrap

	&.wordBreakAll
		word-break: break-all

	&.selectNone
		user-select: none

	// Мультилайн текст
	&.multi
		+flex(column)

		&.row
			+flex(row)
			gap: 1rem

		&.fullWidth
			.text
				width: 100%

		.text
			width: fit-content

	// Позиционирование
	&.left
		+flex($justify-content: left, $align-items: flex-start, $align-self: flex-start)

	&.center
		+flex($justify-content: center, $align-items: center, $align-self: center)
		text-align: center

	&.right
		+flex($justify-content: right, $align-items: flex-end, $align-self: flex-end)
		text-align: right

	// Размеры
	&.fullWidth
		width: 100%

	// Подчеркивание текста
	&.textDecoration
		text-decoration-line: underline
		cursor: pointer

	// Зачеркивание текста
	&.lineThrough
		text-decoration: line-through

	// Жирный текст
	&.fontWeight700
		font-weight: 700

	// Ссылка
	&.link
		position: relative
		cursor: pointer

		&::before
			content: ''
			position: absolute
			bottom: -3px
			width: 100%
			height: 1px
			border-radius: 1px
			background-color: var(--textLabel)
			transform: scaleX(0)
			+transition(transform)

		&:hover
			&::before
				transform: scaleX(1)

		&.underlined

			&::before
				opacity: 1
				transform: scaleX(1)
				+transition(opacity)

			&:hover
				&::before
					opacity: .5

	&.cursorPointer
		cursor: pointer

	&.cursorContext
		cursor: context-menu
</style>
