<script setup>
const breadcrumbs = [
	{
		title: 'Главная',
		to: '/',
	},
	{
		title: 'Корзина',
		to: '/',
	},
];
</script>

<template>
	<div class="container">
		<BreadCrumbs :list="breadcrumbs" />
		КОРЗИНА
	</div>
</template>

<style lang="scss"></style>
