<script setup>
defineProps({
	list: Array,
});

const tagColor = tag => {
	switch (tag.toLowerCase()) {
		case 'хит':
			return '#FF8C22';
		case 'заморозка':
			return '#22C6EA ';
		case 'новинка':
			return '#10B145';

		default:
			return '#464646';
	}
};
</script>

<template>
	<ul v-if="list" class="tags">
		<li
			v-for="tag in list"
			:key="tag"
			:style="{ backgroundColor: tagColor(tag) }"
			class="tags__item"
		>
			<template v-if="tag.toLowerCase() === 'заморозка'">
				<IconSnowflake />
			</template>
			<template v-else>
				{{ tag }}
			</template>
		</li>
	</ul>
</template>

<style lang="scss">
.tags {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 4px;
}

.tags__item {
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	line-height: 100%;
	font-size: 12px;
	text-align: center;
	color: $bg-main;
	background-color: #464646;
	padding: 6px 8px;
	border-radius: 52px;

	&--icon {
		padding: 6px;
	}
}
</style>
