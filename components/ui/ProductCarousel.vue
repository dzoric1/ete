<script setup>
import { testProduct } from '~/testProduct';
</script>

<template>
	<div class="product-carousel__wrapper">
		<Swiper
			class="product-carousel"
			:modules="[SwiperNavigation]"
			slides-per-view="auto"
			:space-between="8"
			:navigation="false"
			:breakpoints="{
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					navigation: {
						prevEl: '.product-carousel__prev',
						nextEl: '.product-carousel__next',
					},
				},
			}"
		>
			<SwiperSlide v-for="(slide, i) in 5" :key="slide" class="swiper-slide">
				<CatalogItem :product="testProduct" :pagId="i" />
			</SwiperSlide>
		</Swiper>
		<button class="product-carousel__prev"><IconArrow /></button>
		<button class="product-carousel__next"><IconArrow /></button>
	</div>
</template>

<style lang="scss">
.product-carousel__wrapper {
	position: relative;
}
.swiper-slide {
	width: 100%;

	@include big-mobile {
		max-width: 150px;
	}
}

.product-carousel__prev,
.product-carousel__next {
	position: absolute;
	top: 50%;
	display: block;
	width: 44px;
	height: 44px;
	background-color: $bg-main;
	@include flex-all-center;
	border-radius: 100%;
	box-shadow: 0 2px 8px 0 rgba(12, 12, 13, 0.12);
	z-index: 999;
	transform-origin: 22px 0px;

	svg {
		display: block;
		path {
			fill: $text-primary;
		}
	}
}

.product-carousel__prev {
	left: -22px;
	transform: rotate(90deg) translateY(-50%);
}
.product-carousel__next {
	right: -22px;
	transform: rotate(-90deg) translateY(-50%);
}
</style>
