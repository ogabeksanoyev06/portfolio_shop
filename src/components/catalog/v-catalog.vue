<template>
	<div class="v-catalog">
		<div class="row">
			<div class="col-md-3 mb-4 mb-md-0">
				<div class="stiky_x">
					<p class="title d-block mb-3">Shop The Latest</p>
					<div class="filter_by">
						<div class="input_by">
							<div>
								<input type="text" v-model="category" placeholder="Search..." />
							</div>
							<img src="@/assets/cart-logo/search.png" alt="" />
						</div>
					</div>
					
					<div class="category_filter mt-3">
						<div class="selected_item" @click="isVisible = !isVisible">
							<span>{{
								selectedItem.slice(0, 1).toUpperCase() + selectedItem.slice(1)
							}}</span>
							<svg
								class="rotate_icon"
								:class="isVisible ? 'rotate' : ''"
								width="14"
								height="8"
								viewBox="0 0 14 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.6551 0.103514C12.7208 0.0372643 12.8103 -5.20037e-08 12.9036 -4.7925e-08C12.9969 -4.38464e-08 13.0864 0.0372643 13.1521 0.103514L13.894 0.845401C13.9616 0.908905 14 0.997568 14 1.09036C14 1.18316 13.9616 1.27182 13.894 1.33533L7.46193 7.76735C7.36358 7.86582 7.23016 7.9212 7.09099 7.92133L6.90901 7.92133C6.76984 7.9212 6.63642 7.86582 6.53807 7.76735L0.106047 1.33533C0.0383834 1.27182 9.01957e-07 1.18316 9.06013e-07 1.09036C9.10069e-07 0.997567 0.0383834 0.908904 0.106047 0.8454L0.847934 0.103513C0.913642 0.0372638 1.00309 -5.68113e-07 1.0964 -5.64034e-07C1.18971 -5.59956e-07 1.27915 0.0372638 1.34486 0.103513L7 5.75865L12.6551 0.103514Z"
									fill="black"
								/>
							</svg>
						</div>
						<div :class="isVisible ? 'visible' : ''" class="options">
							<ul>
								<li
									v-for="(selectedCategory, index) in selectedCategorys"
									:key="index"
									@click="
										selectItem(selectedCategory.name),
											sortByCategory(selectedCategory.name)
									"
								>
									{{
										selectedCategory.name.slice(0, 1).toUpperCase() +
										selectedCategory.name.slice(1)
									}}
								</li>
							</ul>
						</div>
					</div>
					<div class="filter_price mt-3">
						<label for="vol">Price (between 0 and 1000):</label>
						<input type="range" v-model="range" min="0" max="1000" step="10" />
					</div>
				</div>
			</div>
			<div class="col-md-9 d-flex flex-wrap justify-content-center">
				<v-catalog-item
					v-for="product in filteredProduct"
					:key="product.id"
					:product_data="product"
				></v-catalog-item>
			</div>
		</div>
	</div>
</template>
<script>
import vCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'v-catalog',
	components: {
		vCatalogItem,
	},
	props: {},
	data() {
		return {
			category: '',
			range: null,
			isVisible: false,
			isVisibleBy: false,
			categories: [],
			selectedItem: 'all',
			selectedCategorys: [
				{ id: 0, name: 'all' },
				{ id: 1, name: "men's clothing" },
				{ id: 2, name: "women's clothing" },
				{ id: 3, name: 'jewelery' },
				{ id: 4, name: 'electronics' },
			],
		};
	},
	computed: {
		...mapGetters(['PRODUCTS']),
		filteredProduct() {
			if (this.categories.length > 0) {
				return this.categories;
			} else {
				return this.PRODUCTS;
			}
			// return this.PRODUCTS.filter(
			// 	product => !product.category.indexOf(this.category)
			// );
			// return this.PRODUCTS.filter(product =>
			// 	product.price > 0 && product.price < this.range ? product : ''
			// );
		},
	},
	methods: {
		...mapActions(['GET_PRODUCTS','add_to_cart']),
		sortByCategory(category) {
			this.categories = [];
			this.PRODUCTS.map(item => {
				if (item.category === category) {
					this.categories.push(item);
				}
			});
		},
		selectItem(user) {
			this.selectedItem = user;
			this.isVisible = false;
		},
		selectItemBy(user) {
			this.shopByItem = user;
			this.isVisibleBy = false;
		},
	},
	mounted() {
		this.GET_PRODUCTS();
	},
};
</script>
<style scoped>
.v-catalog {
}
.v-catalog .title {
	font-style: normal;
	font-weight: 500;
	font-size: 33px;
	line-height: 43px;
	color: #000;
}
.v-catalog .input_by {
	position: relative;
}
.v-catalog .input_by input {
	outline: none;
	border: none;
	width: 100%;
	padding-bottom: 10px;
	border-bottom: 1px solid #d8d8d8;
}
.v-catalog .input_by img {
	position: absolute;
	background-color: white;
	width: 21px;
	height: 21px;
	right: 0%;
	bottom: 11px;
}
.category_filter {
	max-width: 350px;
	position: relative;
	margin: 0 auto;
}
.category_filter .selected_item {
	height: 50px;
	cursor: pointer;
	border: 1px solid #d8d8d8;
	border-radius: 5px;
	padding: 5px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 400;
}
.category_filter .options {
	position: absolute;
	border: 1px solid #d8d8d8;
	border-radius: 5px;
	left: 0;
	right: 0;
	top: 51px;
	max-width: 100%;
	background-color: #fff;
	padding: 10px;
	z-index: 10;
	visibility: hidden;
	max-height: 0;
	overflow: hidden;
	transition: all 0.3s linear;
}
.category_filter .options.visible {
	visibility: visible;
	max-height: 200px;
}
.category_filter .options ul {
	list-style: none;
	padding-left: 8px;
	margin: 0;
	text-align: left;
	max-height: 200px;
	overflow-y: scroll;
	overflow-x: hidden;
}
.category_filter .options ul li {
	width: 100%;
	cursor: pointer;
	padding: 5px 10px;
	border-bottom: 1px solid #d8d8d8;
	font-size: 16px;
	font-weight: 400;
	transition: all 0.3s ease-in-out;
}
.category_filter .options ul li:hover {
	background-color: #f1f1f1;
}
.rotate_icon {
	transform: rotate(0deg);
	transition: all 0.5s ease-in-out;
}
.rotate {
	transform: rotate(180deg);
}
@media (min-width: 768px) {
	.stiky_x {
		position: sticky;
		top: 80px;
		z-index: 1;
	}
}
</style>
