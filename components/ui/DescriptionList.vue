<script setup>
// defineProps({
// 	list: Array,
// });

const list = [
	{
		name: '4 товара',
		value: '1972 ₽',
		red: false,
	},
	{
		name: 'Скидка 11%',
		value: '–46 ₽',
		red: true,
	},
	{
		name: 'Доставка',
		value: 'Бесплатно',
		red: false,
	},
	{
		name: 'Общий вес',
		value: '6.678 кг',
		red: false,
	},
];
</script>

<template>
	<ul v-if="list" class="description-list">
		<li v-for="item in list" :key="item.name" class="description-list__item">
			<p class="description-list__item-name">{{ item.name }}</p>
			<p
				class="description-list__item-value"
				:class="{ 'description-list__item-value--red': item.red }"
			>
				{{ item.value }}
			</p>
		</li>
	</ul>
</template>

<style lang="scss">
.description-list {
	display: flex;
	flex-direction: column;
	gap: 20px;

	@include tablet {
		gap: 8px;
	}
}

.description-list__item {
	display: flex;
	justify-content: space-between;
	font-size: 16px;

	@include tablet {
		font-size: 14px;
	}
}

.description-list__item-name {
	@include tablet {
		color: $text-thirdly;
	}
}

.description-list__item-value {
	&--red {
		color: $accent-red;
	}
}
</style>
