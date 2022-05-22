<template>
	<div class="v-cart-item" v-if="cart_item_data">
		<div class="cart_item_info mb-3">
			<div class="cart_st">
				<div class="cx d-flex justify-content-between">
					<div class="cart_img">
						<div class="cart_item_img">
							<img :src="cart_item_data.product.image" alt="image" />
						</div>
					</div>
					<div
						class="cart_item_close d-block d-md-none"
						@click="removeCart(cart_item_data)"
					>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 1.18344L12.8166 13M1 12.8166L12.8166 1"
								stroke="black"
								stroke-width="1.5"
							/>
						</svg>
					</div>
				</div>
				<div class="cart_item_text mx-0 mx-md-3">
					<p>{{ cart_item_data.product.title }}</p>
					<p>$ {{ cart_item_data.product.price }}</p>
				</div>
				<div class="quantity mb-md-0 mb-3 me-3">
					<span style="cursor: pointer" @click="decrement(cart_item_data)"
						>-</span
					>
					<span class="mx-1" style="cursor: not-allowed">{{
						cart_item_data.quantity
					}}</span>
					<span style="cursor: pointer" @click="increment(cart_item_data)"
						>+</span
					>
				</div>
				<div
					class="cart_item_close d-none d-md-block"
					@click="removeCart(cart_item_data)"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1.18344L12.8166 13M1 12.8166L12.8166 1"
							stroke="black"
							stroke-width="1.5"
						/>
					</svg>
				</div>
			</div>
			<p>{{ cart_item_data.product.description }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'v-cart-item',
	props: {
		cart_item_data: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {};
	},
	computed: {},
	methods: {
		removeCart(product_cart) {
			this.$store.dispatch('removeCart', product_cart);
			console.log(product_cart, '45454');
		},
		increment(quantity_product) {
			this.$store.dispatch('increment', quantity_product);
		},
		decrement(quantity_product) {
			this.$store.dispatch('decrement', quantity_product);
		},
	},
	mounted() {},
};
</script>
<style scoped>
.cart_img {
	width: 120px;
	height: 120px;
}
.cart_item_img {
	width: 100%;
	height: 100%;
}
.cart_img .cart_item_img img {
	width: 100%;
	height: 100%;
}
.cart_item_text p:nth-child(1) {
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 26px;
	color: #000;
}
.cart_item_text p:nth-child(2) {
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 27px;
}
.cart_item_text p:nth-child(3) {
	font-weight: 500;
	font-size: 16px;
	line-height: 27px;
	color: #a18a68;
}
.cart_item_info {
	border-bottom: 1px solid #d8d8d8;
	padding-bottom: 15px;
}
.cart_item_close {
	/* display: flex;
	align-items: center;
	justify-content: center; */
	cursor: pointer;
	border: 1pz solid #d8d8d8;
	/* width: 30px;
	height: 30px;
	background-color: #efefef;
	border-radius: 4px;
	padding: 5px 10px; */
}
.cart_st {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	border-radius: 5px;
}

@media (max-width: 768px) {
	.cart_st {
		flex-direction: column;
	}
	.cart_img {
		margin-bottom: 10px;
	}
	.cart_img .cart_item_img img {
		width: 100%;
		height: 100%;
	}
	.cx {
		width: 100%;
	}
}
</style>
