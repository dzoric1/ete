<script setup>
defineProps({
	title: String,
});

const isOpen = ref(false);
const contentRef = ref(null);
const contentHeight = ref(0);

onMounted(() => {
	contentHeight.value = contentRef.value.scrollHeight;
});

const toggle = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<div class="accordion-item" :class="{ 'accordion-item--open': isOpen }">
		<button class="accordion-item__header" @click="toggle">
			<h3 class="accordion-item__title">{{ title }}</h3>
			<IconArrow class="accordion-item__icon" />
		</button>
		<div
			ref="contentRef"
			class="accordion-item__content"
			:style="{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }"
		>
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accordion-item {
	border-bottom: 1px solid #d1d1d1;
	&--open {
		padding-bottom: 20px;

		.accordion-item__icon {
			transform: rotate(180deg);
		}
	}
}

.accordion-item__header {
	@include flex-between;
	width: 100%;
	padding: 20px 0;
}

.accordion-item__title {
	font-weight: 500;
	font-size: 16px;
	line-height: 120%;
}

.accordion-item__icon {
	transition: transform 0.3s;
}

.accordion-item__content {
	max-height: 0px;
	overflow: hidden;
	transition: max-height 0.3s;
	font-weight: 400;
	font-size: 14px;
	line-height: 135%;
	color: rgba($text-primary, 0.8);
}
</style>
