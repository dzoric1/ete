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

const orderButton = ref(null);
const fixedControls = ref(null);

onMounted(() => {
	const observer = new IntersectionObserver(
		entries => {
			const isVisible = entries[0].isIntersecting;
			fixedControls.value.$el.classList.toggle(
				'order__fixed-controls--visible',
				!isVisible
			);
		},
		{ rootMargin: '-5% 0px -5% 0px' }
	);

	observer.observe(orderButton.value.$el);
});
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
					<div class="order__aside-paid">
						<h4 class="order__aside-paid-title">Способ оплаты</h4>
						<ul class="order__aside-paid-list">
							<li class="order__aside-paid-item">
								<UiRadioButton
									id="cardRadio"
									label="Картой на сайте"
									v-model:checkedValue="radio"
									name="test"
								>
									<IconCardPaid />
								</UiRadioButton>
							</li>
							<li class="order__aside-paid-item">
								<UiRadioButton
									id="cashRadio"
									label="Картой при получении"
									v-model:checkedValue="radio"
									name="test"
								>
									<IconTerminalPaid />
								</UiRadioButton>
							</li>
						</ul>
					</div>
					<UiTextInput
						withButton
						buttonText="Применить"
						placeholder="Номер карты"
						type="number"
						name="promo"
						class="order__aside-input"
					/>
					<UiTextButton
						class="order__aside-link"
						text="Заказать"
						ref="orderButton"
					/>
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
}

.order__body {
	height: 1000px;
}

.order__aside {
	margin: 0 auto;

	@include tablet {
		h2 {
			display: none;
		}
	}
}

.order__aside-description {
	margin-bottom: 24px;

	@include tablet {
		margin-bottom: 20px;
		order: 4;
	}
}

.order__aside-total {
	margin-bottom: 24px;

	@include tablet {
		order: 3;
		margin-bottom: 7px;
	}
}

.order__aside-input {
	margin-bottom: 24px;

	@include tablet {
		order: 2;
	}
}

.order__aside-paid {
	margin-bottom: 24px;

	@include tablet {
		margin-bottom: 16px;
		order: 2;
	}
}

.order__aside-paid-title {
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 24px;
}

.order__aside-paid-list {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.order__aside-paid-item {
	&:not(:last-child) {
		&::after {
			display: block;
			content: '';
			width: 100%;
			height: 1px;
			background-color: #d1d1d1;
			margin-top: 16px;
		}
	}
}

.order__aside-link {
	margin: 0 auto;

	@include tablet {
		order: 5;
	}
}

.order__fixed-controls {
	display: none;

	@include tablet {
		&--visible {
			display: flex;
		}
	}
}

.order__fixed-controls-delivery {
	@include big-mobile {
		display: none;
	}
}

.order__fixed-controls-total {
	gap: 10px;
	margin-left: auto;

	@include big-mobile {
		display: none;
	}
}

.order__fixed-controls-link {
	max-width: max-content;

	@include big-mobile {
		max-width: 540px;
		margin: 0 auto;
	}
}
</style>
