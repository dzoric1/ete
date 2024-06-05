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

const deliveryTypes = [
	{
		name: 'delivery',
		title: 'Доставка',
	},
	{
		name: 'pickup',
		title: 'Самовывоз',
	},
];

const deliveryDates = [
	{
		name: 'today',
		title: 'Сегодня',
		subtitle: '21 октября',
	},
	{
		name: 'tomorrow',
		title: 'Завтра',
		subtitle: '22 октября',
	},
];

const todayTimes = [
	{
		id: 1,
		title: 'с 10 до 13',
	},
	{
		id: 2,
		title: 'с 13 до 17',
	},
	{
		id: 3,
		title: 'с 16 до 21',
	},
];

const tomorrowTimes = [
	{
		id: 1,
		title: 'с 10 до 13',
	},
	{
		id: 2,
		title: 'с 13 до 17',
	},
];

const selectedDeliveryType = ref('delivery');
const selectedDeliveryDate = ref('today');

const changeDeliveryTypesTab = tabName => {
	selectedDeliveryType.value = tabName;
};
const changeDeliveryDatesTab = tabName => {
	selectedDeliveryDate.value = tabName;
};

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
				<div class="order__body">
					<div class="order__delivery-types">
						<UiTabs
							:tabNames="deliveryTypes"
							:selectedTab="selectedDeliveryType"
							@changeTab="changeDeliveryTypesTab"
						>
							<div v-if="selectedDeliveryType === 'delivery'">
								<UiDeliveryOrderInfo
									class="order__delivery"
									withLink
									title="Иркутск, Байкальская, 256"
								>
									<IconTruck />
								</UiDeliveryOrderInfo>
								<form class="order__delivery-form">
									<div class="order__delivery-form-row">
										<UiTextInput placeholder="Квартира" name="apartment" />
										<UiTextInput placeholder="Этаж" name="floor" />
										<UiTextInput placeholder="Подъезд" name="entrance" />
										<UiTextInput placeholder="Домофон" name="intercom" />
									</div>
									<UiCheckBox
										label="Частный дом"
										class="order__delivery-form-checkbox"
									/>
									<UiTextInput
										placeholder="Оставьте комментарий к заказу"
										name="comment"
									/>
								</form>
							</div>
							<div v-if="selectedDeliveryType === 'pickup'">
								<UiDeliveryOrderInfo title="Иркутск, Байкальская, 256">
									<IconHome />
								</UiDeliveryOrderInfo>
							</div>
						</UiTabs>
					</div>
					<h3 class="order__subtitle">
						{{
							selectedDeliveryType === 'delivery'
								? 'Выберите время и дату доставки'
								: 'Выберите время и дату самовывоза'
						}}
					</h3>
					<UiTabs
						:tabNames="deliveryDates"
						:selectedTab="selectedDeliveryDate"
						@changeTab="changeDeliveryDatesTab"
						class="order__delivery-dates"
					>
						<div v-if="selectedDeliveryDate === 'today'">
							<UiTimeList :list="todayTimes" />
						</div>
						<div v-if="selectedDeliveryDate === 'tomorrow'">
							<UiTimeList :list="tomorrowTimes" />
						</div>
					</UiTabs>
					<div class="order__contacts">
						<h3 class="order__contacts-title">Контактные данные</h3>
						<div class="order__contacts-wrapper">
							<UiTextInput placeholder="Имя" name="name" />
							<UiTextInput placeholder="Фамилия" name="surname" />
							<UiTextInput
								placeholder="Номер телефона"
								name="phone"
								type="tel"
							/>
							<UiSelect
								:options="[
									'Перезвонить мне',
									'Написать в Telegram',
									'Написать в WhatsApp',
								]"
							/>
						</div>
					</div>
				</div>
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
									v-model:checked="radio"
									name="test"
								>
									<IconCardPaid />
								</UiRadioButton>
							</li>
							<li class="order__aside-paid-item">
								<UiRadioButton
									id="cashRadio"
									label="Картой при получении"
									v-model:checked="radio"
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

	@include big-mobile {
		font-size: 18px;
		margin-bottom: 20px;
	}
}

.order__wrapper {
	width: 100%;
	display: grid;
	grid-template-columns: 820fr 320fr;
	gap: 0 60px;
	margin-bottom: 80px;

	@include tablet {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	@include big-mobile {
		gap: 32px;
	}
}

.order__delivery-types {
	border: 1px solid #d1d1d1;
	border-radius: 16px;
	padding: 24px;
	margin-bottom: 40px;

	@include big-mobile {
		padding: 16px 10px;
		border-radius: 12px;
		margin-bottom: 32px;
	}
}

.order__delivery {
	margin-bottom: 24px;

	@include big-mobile {
		margin-bottom: 16px;
	}
}

.order__delivery-form {
}

.order__delivery-form-row {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
	margin-bottom: 16px;

	@include big-mobile {
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
	}
}

.order__delivery-form-checkbox {
	margin-bottom: 28px;

	@include big-mobile {
		margin-bottom: 16px;
	}
}

.order__subtitle {
	font-size: 18px;
	line-height: 135%;
	margin-bottom: 20px;

	@include big-mobile {
		font-size: 16px;
		line-height: 120%;
		margin-bottom: 16px;
	}
}

.order__delivery-dates {
	margin-bottom: 40px;

	@include big-mobile {
		margin-bottom: 32px;
	}
}

.order__contacts {
	border: 1px solid #d1d1d1;
	border-radius: 16px;
	padding: 24px;

	@include big-mobile {
		padding: 16px 10px;
	}
}

.order__contacts-title {
	font-weight: 500;
	font-size: 24px;
	margin-bottom: 24px;

	@include big-mobile {
		font-size: 18px;
		margin-bottom: 16px;
	}
}

.order__contacts-wrapper {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 12px;

	@include big-mobile {
		grid-template-columns: repeat(1, 1fr);
		gap: 8px;
	}
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
