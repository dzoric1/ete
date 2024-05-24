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
	<section class="cart">
		<div class="container cart__container">
			<BreadCrumbs :list="breadcrumbs" />
			<div class="cart__wrapper">
				<div class="cart__body">
					<div class="cart__header">
						<h1 class="cart__title">Корзина</h1>
						<span class="cart__count">6 товаров</span>
						<button class="cart__clear">Очистить</button>
					</div>
				</div>
				<div class="cart__aside">
					<h2 class="cart__aside-title">Адрес и время доставки</h2>
					<div class="cart__aside-delivery">
						<p class="cart__aside-delivery-item">
							<IconMark />
							Иркутск, Байкальская, 256
						</p>
						<p class="cart__aside-delivery-item">
							<IconTruck />
							Доставка сегодня с 16:00 до 21:00
						</p>
					</div>
					<ul class="cart__aside-description">
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">4 товара</p>
							<p class="cart__aside-description-item-value">1972 ₽</p>
						</li>
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">Скидка 11%</p>
							<p class="cart__aside-description-item-value">–46 ₽</p>
						</li>
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">Доставка</p>
							<p class="cart__aside-description-item-value">Бесплатно</p>
						</li>
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">Общий вес</p>
							<p class="cart__aside-description-item-value">6.756 кг</p>
						</li>
					</ul>
					<UiTextInput
						withButton
						buttonText="Применить"
						placeholder="Промокод"
						type="text"
						name="promo"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.cart {
}

.cart__container {
}

.cart__wrapper {
	width: 100%;
	display: grid;
	grid-template-columns: 820fr 320fr;
	gap: 80px;

	@include tablet {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	@include big-mobile {
		flex-direction: column-reverse;
	}
}

.cart__body {
}

.cart__header {
	display: flex;
	gap: 4px;
}

.cart__title {
	font-weight: 500;
	font-size: 24px;
	line-height: 135%;

	@include tablet {
		font-size: 20px;
		line-height: 120%;
	}
}

.cart__count {
	font-weight: 500;
	font-size: 14px;
	line-height: 135%;
	color: $text-thirdly;

	@include tablet {
		font-size: 12px;
		line-height: 120%;
	}
}

.cart__clear {
	display: flex;
	margin-left: auto;
	font-size: 14px;
	color: $text-thirdly;

	@include tablet {
		font-size: 12px;
	}
}

.cart__aside {
}
</style>
