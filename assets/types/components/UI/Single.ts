export interface Input {
	name?: string
	label?: string
	tipText?: string
	type?: InputType
	placeholder?: string

	isAutocomplete?: boolean
	isAutofocus?: boolean
	isRequired?: boolean
	isDisabled?: boolean
}

export interface Button {
	label?: string | number
	type?: string
	isStopPropagation?: boolean
}

export interface Icon {
	name: string
	style?: string
	size?: string
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
