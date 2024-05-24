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
			<div class="cart__header">
				<h1 class="cart__title">Корзина</h1>
				<span class="cart__count">6 товаров</span>
				<button class="cart__clear">Очистить</button>
			</div>
			<div class="cart__wrapper">
				<div class="cart__body">BODY</div>
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
						<NuxtLink class="cart__aside-delivery-link">
							Изменить адрес
						</NuxtLink>
					</div>
					<ul class="cart__aside-description">
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">4 товара</p>
							<p class="cart__aside-description-item-value">1972 ₽</p>
						</li>
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">Скидка 11%</p>
							<p
								class="cart__aside-description-item-value cart__aside-description-item-value--red"
							>
								–46 ₽
							</p>
						</li>
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">Доставка</p>
							<p class="cart__aside-description-item-value">Бесплатно</p>
						</li>
						<li class="cart__aside-description-item">
							<p class="cart__aside-description-item-name">Общий вес</p>
							<p class="cart__aside-description-item-value">6.678 кг</p>
						</li>
					</ul>
					<UiTextInput
						withButton
						buttonText="Применить"
						placeholder="Промокод"
						type="text"
						name="promo"
						class="cart__aside-input"
					/>
					<div class="cart__aside-total">
						<p class="cart__aside-total-title">Итого</p>
						<span class="cart__aside-total-count">1928 ₽</span>
					</div>
					<div class="cart__aside-alert">
						<IconTruck />
						1972 ₽ до бесплатной доставки
					</div>
					<NuxtLink class="cart__aside-link" to="/">Оформить заказ</NuxtLink>
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
	gap: 0 80px;

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
	max-width: 67%;

	@include tablet {
		max-width: 100%;
		margin-bottom: 24px;
	}
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
	width: 100%;
	max-width: 540px;
	margin: -33px auto 0 auto;

	display: flex;
	flex-direction: column;

	@include tablet {
		margin-top: 0;
	}
}

.cart__aside-title {
	font-weight: 500;
	font-size: 24px;
	line-height: 135%;
	margin-bottom: 24px;

	@include tablet {
		order: 1;
		font-size: 18px;
		margin-bottom: 16px;
	}
}

.cart__aside-delivery {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 20px;

	@include tablet {
		order: 2;
		font-size: 14px;
		margin-bottom: 40px;
	}
}

.cart__aside-delivery-item {
	display: grid;
	align-items: center;
	grid-template-columns: 24px auto;
	gap: 8px;
	color: $text-thirdly;

	@include tablet {
		gap: 2px;
	}
}

.cart__aside-delivery-link {
	font-size: 14px;
	text-decoration: underline;
	text-decoration-skip-ink: none;
	color: $accent-red;
	margin-top: 8px;

	@include tablet {
		margin-top: 3px;
	}
}

.cart__aside-description {
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 20px;

	@include tablet {
		gap: 8px;
		margin-bottom: 16px;
		order: 4;
	}
}

.cart__aside-description-item {
	display: flex;
	justify-content: space-between;
	font-size: 16px;

	@include tablet {
		font-size: 14px;
	}
}

.cart__aside-description-item-name {
	@include tablet {
		color: $text-thirdly;
	}
}

.cart__aside-description-item-value {
	&--red {
		color: $accent-red;
	}
}

.cart__aside-input {
	margin-bottom: 20px;

	@include tablet {
		order: 4;
		margin-bottom: 10px;
	}
}

.cart__aside-total {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 16px;

	@include tablet {
		order: 3;
		margin-bottom: 7px;
	}
}

.cart__aside-total-title {
	font-weight: 500;
	font-size: 18px;
}

.cart__aside-total-count {
	font-weight: 500;
	font-size: 24px;
	letter-spacing: 0.01em;

	@include tablet {
		font-size: 20px;
	}
}

.cart__aside-alert {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 15px 16px;
	background-color: $bg-buttons;
	border-radius: 10px;
	font-weight: 500;
	font-size: 14px;
	margin-bottom: 16px;
	svg {
		width: 28px;
		height: 18px;
		path {
			fill: $accent-red;
		}
	}

	@include tablet {
		order: 6;
		gap: 14px;
	}
}

.cart__aside-link {
	@include button;

	@include tablet {
		order: 7;
	}
}
</style>
