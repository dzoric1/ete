<script setup>
const props = defineProps({
	tabNames: {
		type: Array,
		required: true,
	},
	selectedTab: {
		type: String,
		required: false,
	},
});

const emit = defineEmits(['changeTab']);

const clickOnTab = tabName => {
	emit('changeTab', tabName);
};
</script>

<template>
	<div class="tabs">
		<ul class="tabs__nav-list">
			<li
				v-for="tab in tabNames"
				:key="tab.name"
				:class="[
					'tabs__nav-item',
					{ 'tabs__nav-item--active': tab.name === selectedTab },
				]"
				@click="clickOnTab(tab.name)"
			>
				{{ tab.title }}
				<span>{{ tab.subtitle }}</span>
			</li>
		</ul>
		<div class="tabs__content">
			<Transition name="fade" mode="out-in">
				<slot />
			</Transition>
		</div>
	</div>
</template>

<style lang="scss">
.tabs {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.tabs__nav-list {
	display: flex;
	gap: 4px;
	align-items: center;
	background-color: #f6f7f8;
	padding: 4px;
	border-radius: 12px;
}

.tabs__nav-item {
	font-weight: 500;
	font-size: 16px;
	text-align: center;
	width: 100%;
	height: 44px;
	border-radius: 9px;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	@include flex-all-center;
	flex-direction: column;

	gap: 4px;

	span {
		color: $text-thirdly;
	}

	&:hover {
		background-color: rgba($bg-main, 0.5);
	}

	&--active {
		background-color: $bg-main;
		color: $accent-red;
		&:hover {
			background-color: $bg-main;
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
