<script setup>
defineProps({
	price: Number,
	discountPrice: Number,
	postfix: {
		type: String,
		default: 'кг',
	},
});
</script>

<template>
	<div class="price">
		<p v-if="discountPrice" class="price__value--old">{{ price }} ₽</p>
		<p class="price__value">
			{{ discountPrice || price }} ₽ <span>/ {{ postfix }}</span>
		</p>
	</div>
</template>

<style lang="scss" scoped>
.price__value {
	font-weight: 500;
	font-size: 18px;
	letter-spacing: 0.01em;

	span {
		font-weight: 400;
		font-size: 14px;
		color: $text-thirdly;
	}

	&--old {
		margin-bottom: 2px;
		font-size: 13px;
		letter-spacing: 0.01em;
		text-decoration: line-through;
		color: $text-thirdly;
	}
}
</style>
