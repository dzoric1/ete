<script setup></script>

<template>
	<Accordion type="multiple" class="faq-accordion" variant="outline">
		<AccordionItem value="item-1" class="faq-accordion__item">
			<AccordionTrigger class="faq-accordion__trigger">
				Как сделать заказ?
			</AccordionTrigger>
			<AccordionContent class="faq-accordion__content">
				<p>
					1. Введите свой номер телефона и дождитесь СМС с кодом авторизации. Не
					повторяйте запрос слишком часто: мы можем отправить всего 4 кода за
					день
				</p>
				<p>
					1. Введите свой номер телефона и дождитесь СМС с кодом авторизации. Не
					повторяйте запрос слишком часто: мы можем отправить всего 4 кода за
					день
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2" class="faq-accordion__item">
			<AccordionTrigger class="faq-accordion__trigger">
				Как сделать заказ?
			</AccordionTrigger>
			<AccordionContent class="faq-accordion__content">
				<p>
					1. Введите свой номер телефона и дождитесь СМС с кодом авторизации. Не
					повторяйте запрос слишком часто: мы можем отправить всего 4 кода за
					день
				</p>
				<p>
					1. Введите свой номер телефона и дождитесь СМС с кодом авторизации. Не
					повторяйте запрос слишком часто: мы можем отправить всего 4 кода за
					день
				</p>
			</AccordionContent>
		</AccordionItem>
	</Accordion>
</template>

<style lang="scss">
.faq-accordion {
	max-width: 590px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.faq-accordion__item {
	border-bottom: 1px solid #d1d1d1;
	padding-bottom: 20px;
}

.faq-accordion__content {
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-size: 14px;
	line-height: 135%;
	opacity: 0.8;
	padding-top: 18px;
}
</style>
