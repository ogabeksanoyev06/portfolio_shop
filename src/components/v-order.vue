<template>
	<div class="v-order">
		<div class="container">
			<div class="order-alert">
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM8.7301 13.35L14.3501 7.73004C14.5342 7.53689 14.5342 7.23319 14.3501 7.04004L13.8201 6.51004C13.6257 6.31947 13.3145 6.31947 13.1201 6.51004L8.3801 11.25L6.8801 9.76004C6.78936 9.66336 6.66268 9.60852 6.5301 9.60852C6.39751 9.60852 6.27083 9.66336 6.1801 9.76004L5.6501 10.29C5.55544 10.3839 5.5022 10.5117 5.5022 10.645C5.5022 10.7784 5.55544 10.9062 5.6501 11L8.0301 13.35C8.12083 13.4467 8.24751 13.5016 8.3801 13.5016C8.51268 13.5016 8.63936 13.4467 8.7301 13.35Z"
						fill="#A18A68"
					/>
				</svg>
				<span class="ms-3">We’ve received your order</span>
			</div>
			<div class="row mt-5">
				<div class="col-md-6">
					<h4 class="text-black mb-4">Order Details</h4>
					<div class="order-details">
						<div>
							<div class="details-content">
								<p class="checkout_70">ORDER NUMBER</p>
								<p class="checkout_00">1879605573994</p>
							</div>
							<div class="details-content">
								<p class="checkout_70">EMAIL</p>
								<p class="checkout_00">Vitathemes@gmail.com</p>
							</div>
							<div class="details-content">
								<p class="checkout_70">PAYMENT METHOD</p>
								<p class="checkout_00">Mastercard*************7865</p>
							</div>
							<div class="details-content">
								<p class="checkout_70">ORDER DATE</p>
								<p class="checkout_00">October 8,2020</p>
							</div>
						</div>
						<div>
							<div class="details-content">
								<p class="checkout_70">DELIVERY OPTIONS</p>
								<p class="checkout_00">Standard delivery</p>
							</div>
							<div class="details-content">
								<p class="checkout_70">DELIVERY ADDRESS</p>
								<p class="checkout_00">Kristian holst 34 </p>
								<p class="checkout_00">old street W1F</p>
								<p class="checkout_00">7NU london</p>
								<p class="checkout_00">United Kingdom</p>
							</div>
							<div class="details-content">
								<p class="checkout_70">CONTACT NUMBER</p>
								<p class="checkout_00">+44 8749790988</p>
							</div>
							
						</div>
					</div>
				</div>
				<div class="col-md-5 offset-md-1">
					<h4 class="text-black mb-4">ORDER Summary</h4>
					<div class="order-summary">
						<div class="d-flex justify-content-between">
							<p>PRODUCT</p>
							<p>TOTAL</p>
						</div>
						<hr />
						<div class="mb-3 checkout_00 d-flex justify-content-between">
							<p>Lira Earrings</p>
							<p>$64</p>
						</div>
						<div class="mb-3 checkout_00 d-flex justify-content-between">
							<p>Ollie Earrings</p>
							<p>$10</p>
						</div>
						<div class="mb-3 checkout_00 d-flex justify-content-between">
							<p>Kaede Hair Pin</p>
							<p>$10</p>
						</div>
						<hr />
						<div class="d-flex justify-content-between">
							<p class="checkout_70">SUBTOTAL</p>
							<p class="checkout_00">$74</p>
						</div>
						<hr />
						<div class="d-flex justify-content-between">
							<p class="checkout_70">SHIPPING</p>
							<p class="checkout_00">Free shipping</p>
						</div>
						<hr />
						<div class="d-flex justify-content-between checkout_70 fw-bold">
							<p>TOTAL</p>
							<p>$85</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'vOrder',
	data() {
		return {};
	},
	methods: {},
	computed: {},
	mounted() {},
};
</script>
<style scoped>
.order-alert {
	display: flex;
	align-items: center;
	background-color: #efefef;
	padding: 15px;
	margin-top: 40px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border-top: 2px solid #a18a68;
}
.order-summary {
	background-color: #efefef;
	padding: 25px;
}
.details-content{
	margin-bottom: 25px;
}
.order-details{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.checkout_00 {
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #707070;
}
.checkout_70 {
	font-weight: 500;
	font-size: 16px;
	line-height: 27px;
	color: #000;
}
</style>
