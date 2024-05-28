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
				<div class="cart__body">
					<ul class="cart__list">
						<li class="cart__list-item">
							<div class="cart__list-item-wrapper">
								<div class="cart__list-item-image">
									<img
										src="@/assets/images/cart-item.jpg"
										alt="НАЗВАНИЕ ТОВАРА"
									/>
								</div>
								<div class="cart__list-item-description">
									<h3 class="cart__list-item-title">
										Пирожное Шоколадная бомба "Dessert FANTASY" 12 порций
										(Россия), 1,8 кг/упаковка
									</h3>
									<ul class="cart__list-item-tags">
										<li class="cart__list-item-tag cart__list-item-tag--icon">
											<IconSnowflake />
										</li>
										<li class="cart__list-item-tag">Хит</li>
									</ul>
									<p class="cart__list-item-description-text">
										12 порций · Россия
									</p>
								</div>
								<div class="cart__list-item-counter">
									<button
										class="cart__list-item-button cart__list-item-button--minus"
									></button>
									<span class="cart__list-item-counter-value">12 шт</span>
									<button
										class="cart__list-item-button cart__list-item-button--plus"
									></button>
								</div>
								<button class="cart__list-item-like">
									<IconLike />
								</button>
								<div class="cart__list-item-price">
									<span class="cart__list-item-price-old">1972 ₽</span>
									<p class="cart__list-item-price-value">1972 ₽</p>
								</div>
								<button class="cart__list-item-delete"></button>
							</div>
						</li>
					</ul>
				</div>
				<UiAsideBlock title="Адрес и время доставки" class="cart__aside">
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
					<UiDescriptionList class="cart__aside-description" />
					<UiTextInput
						withButton
						buttonText="Применить"
						placeholder="Промокод"
						type="text"
						name="promo"
						class="cart__aside-input"
					/>
					<UiTotalInfo class="cart__aside-total" :count="1972" />
					<div class="cart__aside-alert">
						<IconTruck />
						1972 ₽ до бесплатной доставки
					</div>
					<UiButton
						class="cart__aside-link"
						text="Оформить заказ"
						isLink
						linkTo="/"
					/>
				</UiAsideBlock>
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
	margin: -33px auto 0 auto;

	@include tablet {
		margin-top: 0;
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
	margin-bottom: 20px;

	@include tablet {
		margin-bottom: 16px;
		order: 4;
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
	margin-bottom: 16px;

	@include tablet {
		order: 3;
		margin-bottom: 7px;
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
	@include tablet {
		order: 7;
	}
}

.cart__list {
	margin-top: 24px;
}

.cart__list-item {
	padding-bottom: 24px;
	border-bottom: 1px solid #ebebeb;
}

.cart__list-item-wrapper {
	position: relative;
	display: flex;
	gap: 12px;
	// align-items: center;
	// justify-content: space-between;

	@include big-mobile {
		flex-wrap: wrap;
	}
}

.cart__list-item-image {
	width: 100%;
	max-width: 90px;
	margin-right: 4px;
	border-radius: 8px;
	overflow: hidden;

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@include small-desktop {
		margin-right: 0;
	}

	@include big-mobile {
		max-width: 80px;
		height: 80px;
		order: 1;
	}
}

.cart__list-item-description {
	display: flex;
	flex-direction: column;
	max-width: 310px;

	@include small-desktop {
		max-width: 210px;
	}

	@include big-mobile {
		max-width: 100%;
		width: 80%;
		margin-right: auto;
		order: 2;
		padding-right: 20px;
	}

	@include small-mobile {
		width: 72%;
	}
}

.cart__list-item-title {
	font-size: 14px;
	margin-bottom: 8px;

	@include big-mobile {
		max-width: 320px;
	}
}

.cart__list-item-tags {
	display: flex;
	align-items: center;
	gap: 4px;
}

.cart__list-item-tag {
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	line-height: 100%;
	font-size: 12px;
	text-align: center;
	color: $bg-main;
	background-color: #464646;
	padding: 6px 8px;
	border-radius: 52px;

	&--icon {
		padding: 6px;
	}
}

.cart__list-item-description-text {
	margin-top: auto;
	font-size: 12px;
	color: $text-thirdly;
}

.cart__list-item-counter {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 16px 12px;
	align-self: center;
	border: 1px solid #d1d1d1;
	border-radius: 10px;
	margin-left: 38px;

	@include small-desktop {
		margin-left: 0;
	}

	@include big-mobile {
		order: 4;
	}
}

.cart__list-item-button {
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;

	&::after,
	&::before {
		position: absolute;
		content: '';
		display: block;
		width: 14px;
		height: 2px;
		background: $accent-red;
		pointer-events: all;
		border-radius: 2px;
	}

	&--plus {
		&::before {
			transform: rotate(90deg);
		}
	}
}

.cart__list-item-counter-value {
	font-weight: 500;
	font-size: 14px;
}

.cart__list-item-like {
	height: max-content;
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	border: 1px solid #d1d1d1;
	border-radius: 10px;
	margin-right: 43px;

	@include small-desktop {
		margin-right: 0;
	}

	@include big-mobile {
		order: 4;
	}
}

.cart__list-item-price {
	align-self: center;

	@include big-mobile {
		order: 3;
		margin-right: auto;
	}
}

.cart__list-item-price-old {
	display: block;
	font-size: 14px;
	letter-spacing: 0.01em;
	text-decoration: line-through;
	text-align: right;
	color: $text-thirdly;
}

.cart__list-item-price-value {
	font-weight: 500;
	font-size: 16px;
	letter-spacing: 0.01em;
	text-align: right;
}

.cart__list-item-delete {
	position: relative;
	align-self: center;
	display: flex;
	align-items: center;
	width: 16px;
	height: 16px;
	margin-left: auto;

	&::after,
	&::before {
		position: absolute;
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background: #bdbdbd;
		pointer-events: all;
		border-radius: 2px;
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}

	@include big-mobile {
		position: absolute;
		top: 0;
		right: 0;
	}
}
</style>
