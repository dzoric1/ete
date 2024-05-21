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
	<section class="faq">
		<div class="container faq__container">
			<BreadCrumbs :list="breadcrumbs" />

			<h1 class="faq__title">Часто задаваемые вопросы</h1>
			<ul v-if="blocks" class="faq__blocks">
				<li v-for="(block, i) in blocks" :key="i" class="faq__block">
					<NuxtLink
						:to="`${$route.path}/delivery`"
						class="faq__link faq__link--hight-bottom"
					>
						{{ block }}
					</NuxtLink>
				</li>
			</ul>
			<div class="faq__help">
				<h2 class="faq__title">Справка</h2>
				<ul class="faq__help-list">
					<li
						v-for="(link, i) in helpLinks"
						:key="i"
						class="faq__help-list-item"
					>
						<NuxtLink :to="`${$route.path}/delivery`" class="faq__link">
							{{ link }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.faq__title {
	font-size: 32px;
	font-weight: 500;
	margin-bottom: 24px;
	text-align: center;

	@include tablet {
		font-size: 24px;
	}
}
.faq__blocks {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 40px;
	margin-bottom: 60px;

	@include tablet {
		gap: 20px;
		flex-wrap: wrap;
	}

	@include big-mobile {
		grid-template-columns: repeat(2, 1fr);
	}
}
.faq__block {
	flex: 1;
	width: 100%;

	@include tablet {
		flex: 0 1 25%;
	}
}
.faq__link {
	display: block;
	border-radius: 12px;
	box-shadow: $box-shadow;
	width: 100%;
	font-size: 18px;
	font-weight: 500;
	padding: 20px;

	&--hight-bottom {
		padding-bottom: 128px;
	}

	@include tablet {
		font-size: 16px;
	}
}
.faq__help {
	margin-bottom: 80px;
}
.faq__help-list {
	@include flex-center-column;
	gap: 12px;
}
.faq__help-list-item {
	width: 100%;
}
</style>
