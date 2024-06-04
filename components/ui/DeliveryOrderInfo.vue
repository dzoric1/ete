<script setup></script>

<template>
	<div class="delivery-order-info">
		<div class="delivery-order-info__icon">
			<IconTruck />
		</div>
		<div class="delivery-order-info__text">
			<h4 class="delivery-order-info__title">Иркутск, Байкальская, 256</h4>
			<NuxtLink class="delivery-order-info__link">Изменить адрес</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss">
.delivery-order-info {
	display: flex;
	align-items: center;
	gap: 12px;
}
.delivery-order-info__icon {
	background-color: #f6f7f8;
	padding: 16px 11px;
	border-radius: 9px;
	svg {
		width: 40px;
		height: 25px;
		path {
			fill: $accent-red;
		}
	}
}
.delivery-order-info__text {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.delivery-order-info__title {
	font-weight: 500;
	font-size: 20px;
}
.delivery-order-info__link {
	font-size: 14px;
	line-height: 120%;
	text-decoration: underline;
	text-decoration-skip-ink: none;
	color: $accent-red;
}
</style>
