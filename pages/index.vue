<script setup></script>

<template>
	<div class="test-root">
		<NuxtLink to="/faq">Часто задаваемые вопросы</NuxtLink>
		<NuxtLink to="/cart">Корзина</NuxtLink>
		<NuxtLink to="/order">Оформление заказа</NuxtLink>
	</div>
</template>

<style scoped>
.test-root {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin: 50px 0;
}
</style>
