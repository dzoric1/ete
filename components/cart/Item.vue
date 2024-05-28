<script setup>
defineProps({
	title: String,
	price: Number,
	discountPrice: Number,
	serving: String,
	country: String,
});

const tags = ['заморозка', 'Новинка', 'Хит'];
</script>

<template>
	<div class="cart-item">
		<div class="cart-item__image">
			<img src="@/assets/images/cart-item.jpg" :alt="title" />
		</div>
		<div class="cart-item__description">
			<h3 class="cart-item__title">
				{{ title }}
			</h3>
			<UiTags class="cart-item__tags" :list="tags" />
			<p class="cart-item__description-text">{{ serving }} · {{ country }}</p>
		</div>
		<UiCounter class="cart-item__counter" />
		<button class="cart__list-item-like">
			<IconLike />
		</button>
		<div class="cart-item__price">
			<span v-if="discountPrice" class="cart-item__price-old">
				{{ price }} ₽
			</span>
			<p class="cart-item__price-value">{{ discountPrice || price }} ₽</p>
		</div>
		<UiXmarkButton class="cart-item__delete" />
	</div>
</template>

<style lang="scss">
.cart-item {
	position: relative;
	display: flex;
	gap: 12px;

	@include big-mobile {
		flex-wrap: wrap;
	}
}

.cart-item__image {
	width: 100%;
	max-width: 90px;
	max-height: 90px;
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

.cart-item__description {
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

.cart-item__title {
	font-size: 14px;
	margin-bottom: 8px;

	@include big-mobile {
		max-width: 320px;
	}
}

.cart-item__description-text {
	margin-top: auto;
	font-size: 12px;
	color: $text-thirdly;
}

.cart-item__counter {
	align-self: center;
	margin-left: 38px;

	@include small-desktop {
		margin-left: 0;
	}

	@include big-mobile {
		order: 4;
	}
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

	&:hover {
		opacity: 1;
		svg {
			path {
				fill: $accent-red;
			}
		}
	}

	&--active {
		svg {
			path {
				fill-rule: nonzero;
				fill: $accent-red;
			}
		}
	}

	@include small-desktop {
		margin-right: 0;
	}

	@include big-mobile {
		order: 4;
	}
}

.cart-item__price {
	align-self: center;

	@include big-mobile {
		order: 3;
		margin-right: auto;
	}
}

.cart-item__price-old {
	display: block;
	font-size: 14px;
	letter-spacing: 0.01em;
	text-decoration: line-through;
	text-align: right;
	color: $text-thirdly;
}

.cart-item__price-value {
	font-weight: 500;
	font-size: 16px;
	letter-spacing: 0.01em;
	text-align: right;
}

.cart-item__delete {
	align-self: center;
	margin-left: auto;

	@include big-mobile {
		position: absolute;
		top: 0;
		right: 0;
	}
}
</style>
