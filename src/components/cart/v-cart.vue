<template>
	<div class="v-cart mt-5 container">
		<div v-if="!cart.length" class="d-flex align-items-center justify-content-center container">
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
			<div class="col-md-7">
				<v-cart-item
					v-for="(item, i) in cart"
					:key="i"
					:cart_item_data="item"
				></v-cart-item>
			</div>
			<div class="col-md-5">dddwdw</div>
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
	props: {
		
	},

	data() {
		return {};
	},
	computed: {
		cart() {
			return this.$store.state.cart;
		},
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
	line-height: 43px;
}
</style>
