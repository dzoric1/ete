<script setup></script>

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
		<SwiperSlide v-for="slide in 5" :key="slide" class="swiper-slide">
			<strong>{{ slide }}</strong>
		</SwiperSlide>
	</Swiper>
</template>

<style lang="scss" scoped>
.swiper-slide {
	width: 100%;
	height: 500px;
	background-color: $bg-buttons;

	@include big-mobile {
		max-width: 150px;
		height: 300px;
	}
}
</style>
