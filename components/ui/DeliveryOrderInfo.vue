<script setup>
defineProps({
	title: String,
	withLink: Boolean,
});
</script>

<template>
	<div class="delivery-order-info">
		<div class="delivery-order-info__icon">
			<slot />
		</div>
		<div class="delivery-order-info__text">
			<h4 class="delivery-order-info__title">{{ title }}</h4>
			<NuxtLink v-if="withLink" class="delivery-order-info__link">
				Изменить адрес
			</NuxtLink>
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
	@include flex-all-center;
	svg {
		width: 40px;
		height: 25px;
		path {
			fill: $accent-red;
		}
	}

	@include big-mobile {
		svg {
			width: 29px;
			height: 19px;
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

	@include big-mobile {
		font-size: 16px;
	}
}

.delivery-order-info__link {
	font-size: 14px;
	line-height: 120%;
	text-decoration: underline;
	text-decoration-skip-ink: none;
	color: $accent-red;
}
</style>
