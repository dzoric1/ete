<script setup>
defineProps({
	rateCount: Number,
});
</script>

<template>
	<div class="rate">
		<IconStar v-for="item in 5" :key="item" class="rate__icon" />
		{{ rateCount }}
	</div>
</template>

<style lang="scss" scoped>
.rate {
	font-size: 13px;
	color: $text-thirdly;
}
.rate__icon {
	&:not(:last-child) {
		margin-right: 2px;
	}

	&:last-child {
		margin-right: 6px;
	}
}
</style>
