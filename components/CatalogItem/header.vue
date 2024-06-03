<script setup>
const props = defineProps({
	pagId: Number,
	product: Object,
	isCollapse: Boolean,
});

const swiperRef = ref(null);
const slideCount = props.product.imagesUrl.length;

const onSwiper = swiper => {
	swiperRef.value = swiper;
};

const onMouseMove = e => {
	e.stopPropagation();
	const swiper = swiperRef.value;
	const slideWidth = e.target.clientWidth / slideCount;
	const slideIndex = Math.abs(Math.trunc(e.offsetX / slideWidth));
	swiper.slideTo(slideIndex);
};
</script>

<template>
	<div
		class="catalog__item-header"
		:class="{ 'catalog__item-header--collapse': isCollapse }"
	>
		<Swiper
			:modules="[SwiperPagination]"
			:slidesPerView="1"
			:space-between="10"
			:centered-slides="true"
			:pagination="{
				el: `#swiper-pagination-${pagId}`,
			}"
			@swiper="onSwiper"
			class="catalog__item-header-swiper"
		>
			<SwiperSlide
				v-for="url in product.imagesUrl"
				:key="url"
				class="catalog__item-header-swiper-slide"
			>
				<img :src="url" :alt="product.title" />
			</SwiperSlide>
		</Swiper>
		<div
			class="mouseZone"
			@mousemove="onMouseMove"
			@mouseleave="onMouseLeave"
		></div>
		<div :id="`swiper-pagination-${pagId}`" class="swiper-pagination"></div>
		<!-- <RateComponent
			v-if="product.rating"
			:value="product.rating"
			class="catalog__item-rate"
		/> -->
		<button class="catalog__item-like">
			<IconLike />
		</button>
		<!-- <button class="catalog__item-about-button" @click="$emit('aboutClick')">
			Подробнее
		</button> -->
		<UiTags class="catalog__item-tags" :list="product.tags" />
	</div>
</template>

<style lang="scss">
.catalog__item-header-swiper-slide {
	width: 100%;

	img {
		display: block;
		width: 100%;
		height: 240px;
		object-fit: cover;
	}
}

.catalog__item-header-swiper {
	width: 100%;
}

.catalog__item-header {
	width: 100%;
	position: relative;
	height: 240px;
	transition: height 0.2s ease;
	overflow: hidden;

	&--collapse {
		height: 186px;
	}
}

.swiper-pagination {
	display: grid;
	padding: 0 16px;
	gap: 4px;
	grid-template-columns: repeat(v-bind(slideCount), 1fr);
	justify-content: space-between;
	width: 100%;
	position: absolute;
	bottom: 4px;
	z-index: 2;
}

.swiper-pagination-bullet {
	width: 100%;
	height: 2px;
	border-radius: 6px;
	background-color: #ddd;
}

.swiper-pagination-bullet-active {
	background-color: $accent-red;
	opacity: 0.6;
}

.mouseZone {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}

.catalog__item-rate {
	position: absolute;
	z-index: 5;
	top: 16px;
	left: 16px;
}

.catalog__item-like {
	position: absolute;
	top: 16px;
	right: 16px;
	z-index: 5;
}

.catalog__item-about-button {
	position: absolute;
	bottom: 60px;
	left: 0;
	right: 0;
	max-width: 160px;
	margin: 0 auto;
	z-index: 5;
	padding: 8px;
	border-radius: 9px;
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	color: var(--red);
	background-color: #feedef;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.2s ease;
}

.catalog__item-tags {
	padding: 0 16px;
	position: absolute;
	z-index: 5;
	bottom: 16px;
}
</style>
