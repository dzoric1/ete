<script setup>
defineProps({
	text: String,
	isLink: Boolean,
	linkTo: String,
});
</script>

<template>
	<NuxtLink v-if="isLink" class="button" :to="linkTo">
		{{ text }}
	</NuxtLink>
	<button v-else class="button">{{ text }}</button>
</template>

<style lang="scss" scoped>
.button {
	@include button;
}
</style>
