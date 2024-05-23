<script setup>
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
	<div class="accordion-item">
		<div class="accordion-title" @click="toggle">TITLE</div>
		<div
			ref="contentRef"
			class="accordion-content"
			:style="{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }"
		>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum voluptate
			pariatur neque autem tempore dolores consequuntur fugit beatae earum
			sapiente. Quisquam cumque vitae praesentium odio! Corrupti delectus magnam
			voluptatum recusandae.
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accordion-content {
	max-height: 0px;
	overflow: hidden;
	transition: max-height 0.3s;
}
</style>
