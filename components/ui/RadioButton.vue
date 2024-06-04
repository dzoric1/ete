<script setup>
const emits = defineEmits(['update:checkedValue']);
const props = defineProps({
	name: {
		type: String,
		default: '',
	},
	id: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	checked: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const handleClick = event => {
	emits('update:checkedValue', event.target.value);
};
</script>

<template>
	<input
		class="radiobutton"
		type="radio"
		:name="name"
		:id="id"
		:value="value"
		:checked="checked"
		:disabled="disabled"
		@input="handleClick($event)"
	/>
	<label :for="id">
		<slot />
		{{ label }}
	</label>
</template>

<style lang="scss" scoped>
.radiobutton {
	position: absolute;
	z-index: -1;
	opacity: 0;
	& + label {
		position: relative;
		display: flex;
		gap: 8px;
		align-items: center;
		user-select: none;
		font-size: 16px;
		cursor: pointer;
		transition: opacity 0.3s ease;
	}
	& + label::after {
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		border: 1px solid #aeaeae;
		border-radius: 100%;
		margin-left: auto;
	}
	& + label::before {
		display: block;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease;
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 3px;
		width: 16px;
		height: 16px;
		background-color: $accent-green;
		border-radius: 100%;
	}
	&:checked + label::after {
		border-color: $accent-green;
	}
	&:checked + label::before {
		opacity: 1;
		visibility: visible;
	}
	&:not(:disabled):not(:checked) {
		& + label:hover {
			opacity: 0.7;
			&::after {
				border-color: $accent-green;
			}
		}
	}
}
</style>
