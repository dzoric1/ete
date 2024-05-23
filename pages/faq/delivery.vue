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
	font-size: 32px;
	font-weight: 500;
	margin-bottom: 24px;
	line-height: 110%;

	@include tablet {
		font-size: 24px;
	}
}
</style>
