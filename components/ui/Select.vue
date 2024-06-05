<script setup>
const props = defineProps({
	options: {
		type: Array,
		default: () => ['Выберите опцию'],
	},
	tabindex: {
		type: Number,
		default: 0,
	},
});

const emit = defineEmits(['input']);
let isOpen = ref(false);
let selectedValue = ref(props.options[0]);
</script>

<template>
	<div class="select" :tabindex="tabindex" @blur="isOpen = false">
		<div
			class="select__selected"
			:class="{ 'select__selected--open': isOpen }"
			@click="isOpen = !isOpen"
		>
			{{ selectedValue }}
			<IconArrow />
		</div>
		<ul class="select__menu" :class="{ 'select__menu--open': isOpen }">
			<li
				v-for="(option, i) of options"
				:key="i"
				class="select__option"
				@click="
					selectedValue = option;
					isOpen = false;
					$emit('input', option);
				"
			>
				{{ option }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.select {
	position: relative;
	width: 100%;
	text-align: left;
	outline: none;
	padding: 0 16px;
	font-size: 16px;
	border-radius: 10px;
	border: 1px solid #d1d1d1;
}

.select__selected {
	cursor: pointer;
	user-select: none;
	padding: 15px 0;
	@include flex-between;

	svg {
		width: 16px;
		height: 16px;
		transition: transform 0.3s ease;
	}

	&--open {
		svg {
			transform: rotate(180deg);
		}
	}
}

.select__menu {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	z-index: 1;
	border: 1px solid #d1d1d1;
	border-radius: 10px;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.3s ease, visibility 0.1s ease;

	&--open {
		visibility: visible;
		opacity: 1;
	}
}

.select__option {
	padding: 8px 16px;
	cursor: pointer;
	user-select: none;

	&:hover {
		background-color: rgba($text-thirdly, 0.1);
	}
}
</style>
