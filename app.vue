<script setup></script>

<template>
	<div class="app">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
.app {
	display: flex;
	height: 100%;
	flex-direction: column;
}

.page-enter-active,
.page-leave-active {
	transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: grayscale(1);
}
</style>
