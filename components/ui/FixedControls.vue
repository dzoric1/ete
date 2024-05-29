<script setup></script>

<template>
	<div class="fixed-controls">
		<slot />
	</div>
</template>

<style lang="scss">
.fixed-controls {
	@include flex-between;
	gap: 12px;
	padding: 24px;
	position: fixed;
	z-index: 10;
	bottom: 0;
	right: 0px;
	left: 0px;
	background-color: $bg-main;

	@include big-mobile {
		padding: 14px 16px;
	}
}
</style>
