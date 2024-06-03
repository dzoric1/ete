<script setup>
const breadcrumbs = [
	{
		title: 'Главная',
		to: '/',
	},
	{
		title: 'Оформление заказа',
		to: '/',
	},
];

const radio = ref(false);

// const cartLink = ref(null);
// const fixedControls = ref(null);

// onMounted(() => {
// 	const observer = new IntersectionObserver(
// 		entries => {
// 			const isVisible = entries[0].isIntersecting;
// 			fixedControls.value.$el.classList.toggle(
// 				'cart__fixed-controls--visible',
// 				!isVisible
// 			);
// 		},
// 		{ rootMargin: '-5% 0px -5% 0px' }
// 	);

// 	observer.observe(cartLink.value.$el);
// });
</script>

<template>
	<section class="order">
		<div class="container order__container">
			<BreadCrumbs :list="breadcrumbs" />
			<h1 class="order__title">Адрес и время доставки</h1>
			<div class="order__wrapper">
				<div class="order__body">ФОРМА</div>
				<UiAsideBlock title="Информация о заказе" class="order__aside">
					<UiDescriptionList class="order__aside-description" />
					<UiTotalInfo class="order__aside-total" :count="1972" />
					<UiTextInput
						withButton
						buttonText="Применить"
						placeholder="Номер карты"
						type="number"
						name="promo"
						class="order__aside-input"
					/>
					<UiRadioButton
						id="cardRadio"
						label="Картой на сайте"
						v-model:checkedValue="radio"
						name="test"
					>
						<IconCardPaid />
					</UiRadioButton>
					<UiRadioButton
						id="cashRadio"
						label="Картой при получении"
						v-model:checkedValue="radio"
						name="test"
					>
						<IconTerminalPaid />
					</UiRadioButton>
					<UiTextButton class="order__aside-link" text="Заказать" linkTo="/" />
				</UiAsideBlock>
			</div>
			<UiFixedControls class="order__fixed-controls" ref="fixedControls">
				<UiDeliveryInfo class="order__fixed-controls-delivery" />
				<UiTotalInfo :count="1972" class="order__fixed-controls-total" />
				<UiTextButton
					class="order__fixed-controls-link"
					text="Заказать"
					linkTo="/"
				/>
			</UiFixedControls>
		</div>
	</section>
</template>

<style lang="scss">
.order__title {
	font-weight: 500;
	font-size: 32px;
	line-height: 110%;
	margin-bottom: 28px;
}

.order__wrapper {
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

.order__body {
}

.order__aside {
	margin: 0 auto;
}

.order__aside-description {
	margin-bottom: 24px;

	// @include tablet {
	// 	margin-bottom: 16px;
	// 	order: 4;
	// }
}

.order__aside-total {
	margin-bottom: 24px;

	// @include tablet {
	// 	order: 3;
	// 	margin-bottom: 7px;
	// }
}

.order__aside-input {
	margin-bottom: 24px;

	// @include tablet {
	// 	order: 4;
	// 	margin-bottom: 10px;
	// }
}

.order__aside-link {
	margin: 0 auto;

	// @include tablet {
	// 	display: none;
	// 	&--mobile {
	// 		display: block;
	// 	}
	// 	order: 7;
	// }
}

// .cart__list {
// 	display: flex;
// 	flex-direction: column;
// 	gap: 24px;
// 	margin-top: 24px;
// }

// .cart__list-item {
// 	padding-bottom: 24px;
// 	border-bottom: 1px solid #ebebeb;
// }

// .cart__slider {
// 	max-width: 820px;
// 	margin-left: 0;
// 	margin-bottom: 40px;

// 	@include tablet {
// 		max-width: 100%;
// 	}
// }

// .cart__link {
// 	max-width: 540px;
// 	margin: 0 auto;
// 	display: none;

// 	@include tablet {
// 		display: block;
// 		margin-bottom: 40px;
// 	}
// }

// .cart__fixed-controls {
// 	display: none;

// 	@include tablet {
// 		&--visible {
// 			display: flex;
// 		}
// 	}
// }

// .cart__fixed-controls-delivery {
// 	@include big-mobile {
// 		display: none;
// 	}
// }

// .cart__fixed-controls-total {
// 	gap: 10px;
// 	margin-left: auto;

// 	@include big-mobile {
// 		display: none;
// 	}
// }

// .cart__fixed-controls-link {
// 	max-width: max-content;

// 	@include big-mobile {
// 		max-width: 540px;
// 		margin: 0 auto;
// 	}
// }
</style>
