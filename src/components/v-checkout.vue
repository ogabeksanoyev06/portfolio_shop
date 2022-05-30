<template>
	<div class="checkout">
		<div class="container">
			<h3 class="my-5 text-center fw-bold">Checkout</h3>
			<p class="checkout_70">
				<span class="checkout_00">Returning customer?</span> Click here to login
			</p>
			<p class="checkout_70">
				<span class="checkout_00">Have a coupon?</span> Click here to enter your
				code
			</p>
			<div class="check_coupon my-4">
				<p class="checkout_00">
					If you have a coupon code, please apply it below.
				</p>
				<div
					class="d-flex align-items-baseline justify-content-between flex-wrap mt-4"
				>
					<form>
						<div class="form_group me-4">
							<input type="text" placeholder="Coupon Code" />
						</div>
					</form>
					<button class="btn_submit">APPLY COUPON</button>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-md-6">
					<div class="checkout_details">
						<h4 class="text-black mb-4">Billing Details</h4>
						<div class="d-flex justify-content-between">
							<div class="form_group me-3">
								<input type="text" placeholder="First name *" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Last name *" />
							</div>
						</div>
						<div class="forms">
							<div class="form_group">
								<input type="text" placeholder="Company name" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Street Address *" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Postcode / ZIP *" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Town / City *" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Phone *" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Email *" />
							</div>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault1"
							/>
							<label class="form-check-label" for="flexCheckDefault1">
								Create an acoount?
							</label>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault2"
							/>
							<label class="form-check-label" for="flexCheckDefault2">
								Ship to a different address?
							</label>
						</div>
						<div class="form_group mt-5">
							<input type="text" placeholder="Order notes" />
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="checkout_order">
						<h4 class="text-black mb-4">YOUR ORDER</h4>
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
						<div
							class="mb-5 d-flex justify-content-between checkout_70 fw-bold"
						>
							<p>TOTAL</p>
							<p>$85</p>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="radio"
								name="flexRadioDefault"
								id="flexRadioDefault1"
								checked
							/>
							<label
								class="form-check-label text-black"
								for="flexRadioDefault1"
							>
								Direct bank transfer
							</label>
						</div>
						<small class="small">
							Make your payment directly into our bank account. Please use your
							Order ID as the payment reference. Your order will not be shipped
							until the funds have cleared in our account
						</small>
						<div class="d-flex flex-column">
							<div class="mt-2 form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label class="form-check-label" for="inlineRadio1"
									>Check payments</label
								>
							</div>
							<div class="my-2 form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label class="form-check-label" for="inlineRadio2"
									>Cash on delivery</label
								>
							</div>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio3"
									value="option3"
								/>
								<label class="form-check-label" for="inlineRadio3">
									PayPal
									<svg
										width="13"
										height="16"
										viewBox="0 0 13 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M10.9137 3.92184C10.5446 6.2604 8.53789 7.98157 6.18226 7.97996H3.63704C3.34237 7.97667 3.0904 8.19229 3.04661 8.48522L2.44023 12.2867C2.39644 12.5796 2.14447 12.7952 1.8498 12.7919H0.405644C0.286846 12.7964 0.17247 12.7463 0.0948464 12.6558C0.0172233 12.5653 -0.0152129 12.4442 0.00670657 12.3268L1.88171 0.673747C1.94493 0.281523 2.28433 -0.00504559 2.67959 6.79661e-05H8.26472C9.0744 0.00102164 9.8438 0.355163 10.3735 0.970696C10.9032 1.58623 11.141 2.40255 11.0254 3.20806L10.9137 3.92184ZM12.6613 7.12993L12.773 6.41615C12.8756 5.68865 12.6862 4.94998 12.2464 4.36304C11.6783 7.27799 9.13763 9.38147 6.18254 9.38355H4.82615C4.57256 9.38715 4.34877 9.55104 4.26764 9.79257L3.36604 15.5349C3.34445 15.6509 3.3759 15.7706 3.45169 15.8607C3.52748 15.9509 3.63958 16.0021 3.757 16H5.20115C5.49639 16.0005 5.74906 15.7872 5.79956 15.4948L6.39797 11.6933C6.44492 11.4022 6.69496 11.1882 6.9884 11.188H7.89797C10.2657 11.2055 12.2904 9.48055 12.6613 7.12993Z"
											fill="black"
										/>
									</svg>
								</label>
							</div>
						</div>
						<router-link :to="{name:'vOrder'}" class="btn_submit d-block text-center mt-4">PLACE ORDER</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'vCheckout',
	data() {
		return {};
	},
	methods: {},
	computed: {},
	mounted() {},
};
</script>
<style scoped>
.form-check-input:checked {
	background-color: #000;
	border-color: #000;
}
.form-check-input:focus {
    box-shadow: 0 0 0 0.25rem rgba(0,0,0,.25);
}
.checkout {
	font-family: 'DM Sans';
}
.checkout_order {
	background-color: #efefef;
	padding: 25px;
}
.checkout form {
	max-width: 300px;
	width: 100%;
}
.checkout_00 {
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #707070;
}
.checkout_70 {
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #000;
}

.form_group {
	width: 100%;
	margin-bottom: 25px;
}
.check_coupon {
	max-width: 500px;
	width: 100%;
	border: 1px solid #d8d8d8;
	padding: 25px 15px;
}
</style>
