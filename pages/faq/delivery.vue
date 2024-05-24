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
			<h1 class="faq-more__title">Доставка</h1>
			<FaqAccordion />
		</div>
	</section>
</template>

<style lang="scss">
.faq-more__title {
	@include headline;
	margin-bottom: 4px;
}
</style>
