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

const cartLink = ref(null);
const fixedControls = ref(null);

onMounted(() => {
	const observer = new IntersectionObserver(
		entries => {
			const isVisible = entries[0].isIntersecting;
			fixedControls.value.$el.classList.toggle(
				'cart__fixed-controls--visible',
				!isVisible
			);
		},
		{ rootMargin: '-5% 0px -5% 0px' }
	);

	observer.observe(cartLink.value.$el);
});
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
						<li v-for="item in 4" class="cart__list-item">
							<CartItem
								title="Макароны Казаречче 'Pasta Rey' 500 гр (Италия)"
								serving="12 порций"
								country="Италия"
								:price="2000"
								:discount-price="1800"
							/>
						</li>
					</ul>
				</div>
				<UiAsideBlock title="Адрес и время доставки" class="cart__aside">
					<UiDeliveryInfo class="cart__aside-delivery" withLink />
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
					<UiTextButton
						class="cart__aside-link"
						text="Оформить заказ"
						isLink
						linkTo="/"
					/>
				</UiAsideBlock>
			</div>
			<UiProductCarousel class="cart__slider" />
			<UiTextButton
				class="cart__link"
				ref="cartLink"
				text="Оформить заказ"
				isLink
				linkTo="/"
			/>
			<UiFixedControls class="cart__fixed-controls" ref="fixedControls">
				<UiDeliveryInfo class="cart__fixed-controls-delivery" />
				<UiTotalInfo :count="1972" class="cart__fixed-controls-total" />
				<UiTextButton
					class="cart__fixed-controls-link"
					text="Оформить заказ"
					isLink
					linkTo="/"
				/>
			</UiFixedControls>
		</div>
	</section>
</template>

<style lang="scss">
.cart {
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

.cart__wrapper {
	width: 100%;
	display: grid;
	grid-template-columns: 820fr 320fr;
	gap: 0 80px;
	margin-bottom: 80px;

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

.cart__aside {
	margin: -33px auto 0 auto;

	@include tablet {
		margin-top: 0;
	}
}

.cart__aside-delivery {
	margin-bottom: 20px;

	@include tablet {
		order: 2;
		margin-bottom: 40px;
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
		margin-bottom: 0;
	}
}

.cart__aside-link {
	margin: 0 auto;

	@include tablet {
		display: none;
		&--mobile {
			display: block;
		}
		order: 7;
	}
}

.cart__list {
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-top: 24px;
}

.cart__list-item {
	padding-bottom: 24px;
	border-bottom: 1px solid #ebebeb;
}

.cart__slider {
	max-width: 820px;
	margin-left: 0;
	margin-bottom: 40px;

	@include tablet {
		max-width: 100%;
	}
}

.cart__link {
	max-width: 540px;
	margin: 0 auto;
	display: none;

	@include tablet {
		display: block;
		margin-bottom: 40px;
	}
}

.cart__fixed-controls {
	display: none;

	@include tablet {
		&--visible {
			display: flex;
		}
	}
}

.cart__fixed-controls-delivery {
	@include big-mobile {
		display: none;
	}
}

.cart__fixed-controls-total {
	gap: 10px;
	margin-left: auto;

	@include big-mobile {
		display: none;
	}
}

.cart__fixed-controls-link {
	max-width: max-content;

	@include big-mobile {
		max-width: 540px;
		margin: 0 auto;
	}
}
</style>
