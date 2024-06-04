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
	group: {
		type: Boolean,
		default: false,
	},
});

const handleClick = event => {
	emits('update:checkedValue', event.target.value);
};
</script>

<template>
	<label class="checkbox">
		<input
			type="checkbox"
			:checked="checked"
			class="checkbox__input"
			@input="handleClick($event)"
		/>
		<span class="checkbox__icon"></span>
		{{ label }}
	</label>
</template>

<style lang="scss" scoped>
.checkbox {
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 16px;
	line-height: 120%;
	user-select: none;

	&:hover {
		.checkbox__icon {
			background-color: rgba(#aeaeae, 0.3);
		}
	}
}

.checkbox__icon {
	width: 20px;
	height: 20px;
	border: 1px solid #aeaeae;
	border-radius: 6px;
	margin-right: 8px;
	transition: background-color 0.2s ease;
}

.checkbox__input {
	position: absolute;
	opacity: 0;
	cursor: pointer;

	&:checked ~ .checkbox__icon {
		background-color: $accent-red;
		border: 1px solid $accent-red;
		background-image: url('@/assets/icons/check.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 12px;
	}
}
</style>
