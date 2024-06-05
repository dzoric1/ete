<script setup>
defineProps({
	list: Array,
});

const activeTime = ref(1);
</script>

<template>
	<ul class="time-list">
		<li
			v-for="item in list"
			class="time-list__item"
			:class="{ 'time-list__item--active': activeTime === item.id }"
			@click="activeTime = item.id"
		>
			{{ item.title }}
		</li>
	</ul>
</template>

<style lang="scss">
.time-list {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}

.time-list__item {
	width: 100%;
	max-width: 170px;
	font-size: 16px;
	text-align: center;
	padding: 16px;
	background-color: #f7f7f7;
	border-radius: 10px;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
	&--active {
		color: $accent-red;
		background-color: rgba($accent-red, 0.06);
	}
}
</style>
