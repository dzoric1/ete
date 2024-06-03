<script setup>
import { testProduct } from '~/testProduct';
</script>

<template>
	<Swiper
		slides-per-view="auto"
		:space-between="8"
		:breakpoints="{
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		}"
	>
		<SwiperSlide v-for="(slide, i) in 5" :key="slide" class="swiper-slide">
			<CatalogItem :product="testProduct" :pagId="i" />
		</SwiperSlide>
	</Swiper>
</template>

<style lang="scss" scoped>
.swiper-slide {
	width: 100%;

	@include big-mobile {
		max-width: 150px;
	}
}
</style>
