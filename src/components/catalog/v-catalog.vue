<template>
	<div class="v-catalog row">
		<page-loader v-if="PRODUCTS == ''"></page-loader>
		<div class="col-md-3">fdfdf</div>
		<div class="col-md-9 d-flex flex-wrap justify-content-center">
			<v-catalog-item
				v-for="product in PRODUCTS"
				:key="product.id"
				:product_data="product"
				@addToProduct="addToProduct"
				@addToCart="addToCart"
			></v-catalog-item>
		</div>
	</div>
</template>
<script>
import PageLoader from '@/components/PageLoader.vue';
import vCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'v-catalog',
	components: {
		vCatalogItem,
		PageLoader,
	},
	props: {},
	data() {
		return {};
	},
	computed: {
		...mapGetters(['PRODUCTS', 'PRODUCT', 'CART']),
	},
	methods: {
		...mapActions(['GET_PRODUCTS', 'ADD_TO_PRODUCT', 'ADD_TO_CART']),
		addToProduct(data) {
			this.ADD_TO_PRODUCT(data);
		},
		addToCart(data) {
			this.ADD_TO_CART(data);
		},
	},
	mounted() {
		this.GET_PRODUCTS();
	},
};
</script>
<style scoped>
.v-catalog {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
