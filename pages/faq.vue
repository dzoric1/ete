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

const blocks = [
	'Условие доставки',
	'Условие доставки',
	'Условие доставки',
	'Условие доставки',
];

const helpLinks = [
	'Возвраты',
	'Доставка',
	'Самовывоз',
	'Оплата',
	'Школа покупателя',
	'Вакансии',
	'Правовая информация',
];
</script>

<template>
	<div class="container">
		<BreadCrumbs :list="breadcrumbs" />

		<h1 class="questions-title">Часто задаваемые вопросы</h1>
		<div class="questions-blocks">
			<NuxtLink
				v-for="(block, i) in blocks"
				:key="i"
				href="/"
				class="questions-block"
			>
				<div class="questions-block__name">{{ block }}</div>
			</NuxtLink>
		</div>
		<div class="questions-help">
			<div class="questions-title">Справка</div>
			<div class="questions-help__links">
				<div
					v-for="(link, i) in helpLinks"
					:key="i"
					class="questions-help__link"
				>
					<NuxtLink href="/">{{ link }}</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
