<script setup>
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
	pagId: Number,
});
</script>

<template>
	<div class="catalog__item">
		<CatalogItemHeader
			:product="product"
			:isCollapse="false"
			:pagId="pagId"
			class="swiper-no-swiping"
		/>
		<div class="catalog__item-footer">
			<div class="catalog__item-footer-row">
				<UiRate :rateCount="22" />
				<p class="catalog__item-description">
					{{ product.weight }} г · {{ product.country }}
				</p>
			</div>
			<h3 class="catalog__item-title">
				{{ product.title }}
			</h3>
			<div class="catalog__item-control">
				<CatalogItemPrice :price="product.price" postfix="шт" />
				<button class="catalog__item-button">
					<IconCart />
				</button>
				<UiCounter />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.catalog__item {
	width: 100%;
	background-color: var(--white);
	border: 1px solid rgba(93, 136, 150, 0.08);
	border-radius: 9px;
	height: 441px;
	display: flex;
	flex-direction: column;

	&:hover {
		.catalog__item-about-button {
			opacity: 1;
			visibility: visible;
		}
	}
}

.catalog__item-footer {
	padding: 16px;
	display: flex;
	flex-direction: column;
	flex: 1;
}

.catalog__item-footer-row {
	@include flex-between;
}

.catalog__item-title {
	font-weight: 500;
	font-size: 15px;
	margin-bottom: 6px;
	margin-top: 12px;
}

.catalog__item-description {
	font-size: 13px;
	color: var(--text-gray);
}

.catalog__item-control {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: auto;
}

.catalog__item-button {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 9px;
	width: 44px;
	height: 44px;
	background-color: $accent-red;
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.7;
	}
}

.catalog__item-about-description {
	display: flex;
	flex-direction: column;
}

.catalog__item-about-image {
	position: relative;
	border: 1px solid rgba(93, 136, 150, 0.08);
	border-radius: 9px;
	img {
		width: 100%;
		object-fit: cover;
	}
}

.catalog__item-about-tags {
	position: absolute;
	top: 16px;
	left: 16px;
}

.catalog__item-about-like {
	position: absolute;
	top: 16px;
	right: 16px;
}

.catalog__item-about-description-title {
	font-weight: 500;
	font-size: 16px;
	line-height: 135%;
	max-width: 300px;
	margin-bottom: 16px;
}

.catalog__item-about-description-row {
	display: flex;
	gap: 20px;
	font-size: 13px;
}
.catalog__item-about-description-brand {
	color: var(--text-gray);
}

.catalog__item-about {
	display: grid;
	gap: 30px 20px;
	grid-template-columns: repeat(2, 1fr);
}

.catalog__item-about-rate {
	margin-left: auto;
}

.catalog__item-about-price {
	margin-top: auto;
	margin-bottom: 15px;

	.price__value {
		font-size: 24px;
		span {
			font-size: 20px;
		}
	}
}

.catalog__item-about-add {
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	color: var(--white);
	padding: 14px;
	border-radius: 9px;
	background-color: var(--red);
	max-width: 200px;
	transition: opacity 0.2s ease;
	margin-bottom: 5px;

	&:hover {
		opacity: 0.7;
	}
}

.catalog__item-about-description-stock {
	font-size: 13px;
	line-height: 130%;
	color: var(--text-gray);
	margin-bottom: 26px;
}

.catalog__item-about-link {
	color: var(--red);
	margin-bottom: 2px;
}

.catalog__item-about-footer {
	grid-column: span 2;
}

.catalog__item-about-footer-title {
	font-weight: 500;
	font-size: 16px;
	margin-bottom: 10px;
}

.catalog__item-about-footer-list {
	display: flex;
	flex-wrap: wrap;
	gap: 15px 44px;
}

.catalog__item-about-footer-item {
	font-weight: 500;
	font-size: 13px;
	line-height: 130%;
	min-width: 180px;
}

.catalog__item-about-footer-item-title {
	color: var(--text-gray);
	margin-bottom: 5px;
}
</style>
