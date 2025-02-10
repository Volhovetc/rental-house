export interface Input {
	label?: string
	name?: string
	isAutofocus?: boolean
	type?: InputType
	placeholder?: string
	tipText?: string
}

export interface Button {
	label?: string | number
	type?: string
	isStopPropagation?: boolean
}

declare global {
	type InputType =
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'

	type LabelText = string | number | (string | number)[]
	type SizeCSS = string | number
	
	interface IInput extends Input {}
	interface IButton extends Button {}
}
