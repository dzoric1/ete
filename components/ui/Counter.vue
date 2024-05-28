<script setup></script>

<template>
	<div class="counter">
		<button class="counter__button counter__button--minus"></button>
		<span class="counter__value">12 шт</span>
		<button class="counter__button counter__button--plus"></button>
	</div>
</template>

<style lang="scss">
.counter {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 16px 12px;
	border: 1px solid #d1d1d1;
	border-radius: 10px;
}

.counter__button {
	width: 18px;
	height: 18px;
	@include flex-all-center;

	&::after,
	&::before {
		position: absolute;
		content: '';
		display: block;
		width: 14px;
		height: 2px;
		background: $accent-red;
		border-radius: 2px;
	}

	&--plus {
		&::before {
			transform: rotate(90deg);
		}
	}
}

.counter__value {
	font-weight: 500;
	font-size: 14px;
}
</style>
