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
	{
		title: 'Доставка',
		to: '/',
	},
];
</script>

<template>
	<section class="faq-more">
		<div class="container">
			<BreadCrumbs :list="breadcrumbs" />
			<h1 class="faq-more__title faq__title">Доставка</h1>
			<FaqAccordion />
		</div>
	</section>
</template>

<style lang="scss">
.faq-more__title {
	text-align: left;
}
</style>
