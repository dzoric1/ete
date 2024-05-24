<script setup>
defineProps({
	buttonText: String,
	label: String,
	placeholder: String,
	type: {
		type: String,
		default: 'text',
	},
	name: {
		type: String,
		required: true,
	},
});

const updateInput = e => {
	emit('update:value', e.target.value);
};
</script>

<template>
	<label class="input-wrapper">
		<span v-if="label" class="input__label">{{ label }}</span>
		<div class="input">
			<input
				:type="type"
				:placeholder="placeholder"
				:name="name"
				@input="updateInput"
			/>
			<button v-if="buttonText" class="input__button">{{ buttonText }}</button>
		</div>
	</label>
</template>

<style lang="scss" scoped>
.input__label {
	display: block;
	margin-bottom: 8px;
}

.input {
	position: relative;

	input {
		padding: 15px 16px;
		border-radius: 10px;
		border: 1px solid #d1d1d1;
		outline: none;
		width: 100%;
		font-size: 16px;
	}

	&__button {
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
		padding: 6px 8px;
		font-size: 12px;
		color: $text-thirdly;
		background-color: #f2f2f2;
		border-radius: 6px;
	}
}
</style>
