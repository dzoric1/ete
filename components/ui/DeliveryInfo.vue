<script setup>
defineProps({
	withLink: Boolean,
});
</script>

<template>
	<div class="delivery-info">
		<p class="delivery-info__item">
			<IconMark />
			Иркутск, Байкальская, 256
		</p>
		<p class="delivery-info__item">
			<IconTruck />
			Доставка сегодня с 16:00 до 21:00
		</p>
		<NuxtLink v-if="withLink" class="delivery-info__link">
			Изменить адрес
		</NuxtLink>
	</div>
</template>

<style lang="scss">
.delivery-info {
	display: flex;
	flex-direction: column;
	gap: 12px;

	@include tablet {
		font-size: 14px;
	}
}

.delivery-info__item {
	display: grid;
	align-items: center;
	grid-template-columns: 24px auto;
	gap: 8px;
	color: $text-thirdly;

	@include tablet {
		gap: 2px;
	}
}

.delivery-info__link {
	font-size: 14px;
	text-decoration: underline;
	text-decoration-skip-ink: none;
	color: $accent-red;
	margin-top: 8px;

	@include tablet {
		margin-top: 3px;
	}
}
</style>
