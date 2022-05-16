<template>
	<div class="v-cart-item">
		<div class="cart_item_info mb-5">
			<div
				class="d-flex flex-md-row flex-column justify-content-between align-items-start"
			>
				<div class="d-flex justify-content-between w-0 w-md-100">
					<div class="cart_item_img">
						<img src="" :alt="image" />
					</div>
					<div class="cart_item_close d-flex d-md-none" @click="removeCartItem">
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
					<p>ppp</p>
					<p>sasasas</p>
					<p>$ 32323</p>
				</div>
				<div class="quantity mb-md-0 mb-3 me-3">
					<span style="cursor: pointer" @click="decrementItem">-</span>
					<span class="mx-1" style="cursor: not-allowed">{{
						1
					}}</span>
					<span style="cursor: pointer" @click="incrementItem">+</span>
				</div>
				<div class="cart_item_close d-none d-md-flex" @click="removeCartItem">
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
		</div>
	</div>
</template>
<script>
export default {
	name: 'v-cart-item',
	props: {},
	data() {
		return {};
	},
	computed: {},
	methods: {},
	mounted() {},
};
</script>
<style scoped>
.cart_item_img {
	width: 130px;
	height: 130px;
}
.cart_item_img img {
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
	/* width: 30px;
	height: 30px;
	background-color: #efefef;
	border-radius: 4px;
	padding: 5px 10px; */
}
</style>
