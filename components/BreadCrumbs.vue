<script setup>
const props = defineProps({
	list: Array,
});
</script>

<template>
	<ul class="breadcrumbs">
		<li v-for="li in list" :key="li" class="breadcrumbs__item">
			<NuxtLink to="/">{{ li.title }}</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss">
.breadcrumbs {
	padding: 30px 0 40px 0;
	display: flex;
	gap: 12px;
}

.breadcrumbs__item {
	color: $text-thirdly;
	font-size: 14px;

	&:not(:last-child) {
		&::after {
			content: '';
			display: inline-block;
			width: 5px;
			height: 9px;
			background: url('@/assets/icons/separator.svg') no-repeat center;
			margin-left: 12px;
		}
	}
}
</style>
