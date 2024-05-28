<script setup>
defineProps({
	title: {
		type: String,
		default: 'Итого',
	},
	count: Number,
});
</script>

<template>
	<div class="total-info">
		<p class="total-info__title">{{ title }}</p>
		<span class="total-info__count">{{ count }} ₽</span>
	</div>
</template>

<style lang="scss">
.total-info {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}

.total-info__title {
	font-weight: 500;
	font-size: 18px;
}

.total-info__count {
	font-weight: 500;
	font-size: 24px;
	letter-spacing: 0.01em;

	@include tablet {
		font-size: 20px;
	}
}
</style>
