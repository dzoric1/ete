<script setup></script>

<template>
	<div class="test-root">
		<NuxtLink to="/faq">Часто задаваемые вопросы</NuxtLink>
		<NuxtLink to="/cart">Корзина</NuxtLink>
	</div>
</template>

<style scoped>
.test-root {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
