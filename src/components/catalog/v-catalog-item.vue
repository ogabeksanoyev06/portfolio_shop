<template>
	<div class="v-catalog-item mx-2">
		<div class="cards">
			<div class="card_img">
				<div class="content_overlay"></div>
				<div class="content-details">
					<div class="d-flex align-items-center justify-content-center">
						<img
							src="@/assets/cart-logo/shopping-cart 1 (1).png"
							alt=""
							@click="addToCart()"
						/>
						<img
							class="mx-2 mx-md-5"
							src="@/assets/cart-logo/Group.png"
							alt=""
						/>
						<img src="@/assets/cart-logo/Vector.png" alt="" />
					</div>
				</div>
				<img
					class="img_category"
					:src="product_data.image"
					:alt="product_data.category"
				/>
			</div>
			<div class="card_info">
				<span class="title">{{ titleSlice(product_data.title) }}</span>
				<span class="price">$ {{ product_data.price }}</span>
				<router-link :to="{ name: 'product', params: { id: product_data.id } }">
					<button class="btn_more">More</button>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'v-catalog-item',
	props: {
		product_data: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {};
	},
	computed: {
		
	},
	methods: {
		titleSlice(text) {
			return text.slice(0, 15) + '...';
		},
		addToCart() {
			this.$store.dispatch('addToCart', {
				product: this.product_data,
				quantity: 1,
			});
			console.log(this.product_data);
		},

	},
	mounted() {},
};
</script>
<style scoped>
.v-catalog-item {
	margin-bottom: 24px;
}
.cards {
	width: 250px;
}
.card_img:hover .content_overlay {
	transform: translateY(0px);
	height: 100%;
	opacity: 1;
}
.card_img:hover .content-details {
	opacity: 1;
	transform: translate(-50%, -50%) translateY(0%);
}
.cards .card_img {
	width: 100%;
	height: 250px;
	background-color: #efefef;
	padding: 10px;
	border-radius: 4px;
	position: relative;
	transition: all 1s ease-in-out;
	cursor: pointer;
	overflow: hidden;
}
.cards .card_img .img_category {
	width: 100%;
	height: 100%;
	border-radius: 4px;
}
.card_info {
	margin-top: 10px;
}
.card_info .title {
	display: block;
	margin-bottom: 4px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 500;
	font-size: 14px;
	line-height: 22px;
	color: #000000;
}
.card_info .price {
	display: block;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 12px;
	line-height: 20px;
	color: #a18a68;
}
.card_info .btn_more {
	display: block;
	width: 100%;
	font-weight: 700;
	font-size: 16px;
	padding: 5px 0;
	color: #a18a68;
	background: #efefef;
	border: 1px solid #efefef;
	border-radius: 4px 4px 0px 0px;
}
.content_overlay {
	background: rgba(255, 255, 255, 0.6);
	position: absolute;
	transform: translateY(300px);
	border-radius: 4px;
	height: 0%;
	width: 100%;
	left: 0px;
	top: 0px;
	bottom: 0px;
	right: 0px;
	opacity: 0;
	-webkit-transition: all 0.4s ease-in-out 0s;
	-moz-transition: all 0.4s ease-in-out 0s;
	transition: all 0.4s ease-in-out 0s;
}
.content-details {
	position: absolute;
	text-align: center;
	top: 50%;
	left: 50%;
	opacity: 0;
	transform: translate(-50%, -50%) translateY(100%);
	transition: all 0.3s ease-in-out 0s;
	color: #000;
}

@media (max-width: 768px) {
	.cards {
		width: 150px;
	}
	.cards .card_img {
		height: 150px;
	}
}
</style>
