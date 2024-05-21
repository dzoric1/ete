<script setup>
const props = defineProps({
	list: Array,
});
</script>

<template>
	<ul class="breadcrumbs">
		<li v-for="li in list" :key="li">
			<NuxtLink to="/">{{ li.title }}</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss"></style>
