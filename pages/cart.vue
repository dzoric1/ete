<script setup>
const breadcrumbs = [
	{
		title: 'Главная',
		to: '/',
	},
	{
		title: 'Помощь',
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