<script setup>
defineProps({
	title: String,
});
</script>

<template>
	<div class="aside">
		<h2 class="aside__title">{{ title }}</h2>
		<slot />
	</div>
</template>

<style lang="scss">
.aside {
	width: 100%;
	max-width: 540px;
	display: flex;
	flex-direction: column;
}

.aside__title {
	font-weight: 500;
	font-size: 24px;
	line-height: 135%;
	margin-bottom: 24px;

	@include tablet {
		order: 1;
		font-size: 18px;
		margin-bottom: 16px;
	}
}
</style>
