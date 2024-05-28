<script setup></script>

<template>
	<button class="xmark-button"></button>
</template>

<style lang="scss">
.xmark-button {
	position: relative;
	@include flex-all-center;
	width: 16px;
	height: 16px;

	&::after,
	&::before {
		position: absolute;
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background: #bdbdbd;
		pointer-events: all;
		border-radius: 2px;
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
}
</style>
