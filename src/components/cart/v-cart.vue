<template>
	<div class="v-cart mt-5 container">
		<div
			v-if="!cart.length"
			class="d-flex align-items-center justify-content-center container"
		>
			<div
				style="min-height: 80vh"
				class="d-flex flex-column align-items-center text-center justify-content-center"
			>
				<img
					style="max-width: 100%; height: auto"
					src="@/assets/cart-logo/shoppingCart.9c0394b.png"
					alt=""
				/>
				<p>Savatchangiz bo'shmi? Muammo yo'q!</p>
				<p>
					Bizning katalogimizdan keng assortimentidan mahsulot tanlashni
					boshlang.
				</p>
				<el-button type="danger">
					<router-link :to="{ name: 'shop' }">
						<span style="color: #fff">Asosiy Sahifa</span>
					</router-link>
				</el-button>
			</div>
		</div>
		<p class="cart-title mb-5">My Cart</p>
		<div class="row">
			<div class="col-md-6 ">
				<div>
					<v-cart-item
						v-for="(item, i) in cart"
						:key="i"
						:cart_item_data="item"
					></v-cart-item>
					<div class="d-flex justify-content-end">
						<button class="btn_submit_outline">UPDATE CART</button>
					</div>
					<div class="d-flex align-items-baseline justify-content-between my-5">
						<form class="w-50">
							<div class="form_group">
								<input type="number" placeholder="Coupon Code" />
							</div>
						</form>
						<button class="btn_submit">APPLY COUPON</button>
					</div>
				</div>
			</div>
			<div class="col-md-5 mt-4 offset-md-1">
				<p class="total_cart">Cart totals</p>
				<div class="d-flex justify-content-between">
					<p class="total_title">Subtotal</p>
					<p class="total_price">$ {{subTotal}} </p>
				</div>
				<div class="d-flex justify-content-between">
					<p class="total_title">Shipping</p>
					<div class="regis">
						<p
							style="
								font-family: 'DM Sans';
								font-style: normal;
								font-weight: 400;
								font-size: 16px;
							"
						>
							Shipping costs will be calculated once you have provided address.
						</p>
						<button class="btn_submit_outline" style="max-width: 100%">
							UPDATE TOTALS
						</button>
					</div>
				</div>
				<hr class="mt-4 mb-5" />
				<div class="d-flex justify-content-between">
					<p class="total_title fw-bold">TOTAL</p>
					<p class="total_price fw-bold">$  </p>
				</div>
				<button class="btn_submit" style="max-width:100%">PROCEED TO CHECKOUT</button>
			</div>
		</div>
	</div>
</template>
<script>
import vCartItem from './v-cart-item.vue';
export default {
	name: 'v-cart',
	components: {
		vCartItem,
	},
	props: {},

	data() {
		return {};
	},
	computed: {
		cart() {
			return this.$store.state.cart;
		},
		subTotal(){
			return this.$store.getters.cartTotalPrice;
		}
		
		
	},

	methods: {},
	mounted() {},
};
</script>
<style scoped>
.cart-title {
	text-align: center;
	font-style: normal;
	font-weight: 500;
	font-size: 33px;
}
.btn_submit_outline {
	background: #fff;
	border: 1px solid #000000;
	color: #000;
	font-weight: 500;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 21px;
	border-radius: 4px;
	padding: 10px;
	margin-top: 20px;
}
.btn_submit {
	background: #000;
	border: 1px solid #000000;
	color: #fff;
	font-weight: 400;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 21px;
	border-radius: 4px;
	padding: 10px;
	margin-top: 20px;
}
.form_group input {
	outline: none;
	border: none;
	border-bottom: 1px solid #d8d8d8;
	width: 100%;
	font-size: 14px;
	color: #707070;
	font-weight: 500;
	font-family: 'DM Sans';
	padding-bottom: 10px;
}
.total_cart {
	font-family: 'DM Sans';
	font-size: 20px;
	font-weight: 500;
	color: #000;
	margin-bottom: 20px;
}
.total_title {
	font-family: 'DM Sans';
	font-style: normal;
	text-transform: uppercase;
	font-weight: 400;
	font-size: 16px;
}
.total_price {
	font-family: 'DM Sans';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
}
.regis {
	width: 60%;
}
button {
	max-width: 160px;
	width: 100%;
}
@media (max-width: 768px) {
	.regis {
		width: 70%;
	}
}
</style>
