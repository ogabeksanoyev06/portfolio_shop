import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [],
		cart: [],
		items: [
			{ title: 'Shop', name: 'shop', id: 0 },
			{ title: 'Blog', name: 'blog', id: 1 },
			{ title: 'Our-story', name: 'our-story', id: 2 },
		],
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		ITEMS(state) {
			return state.items;
		},
		cart(state) {
			return state.cart;
		},
		cartTotalPrice(state) {
			let total = 0;
			state.cart.forEach(item => {
				total += item.product.price * item.quantity;
			});
			return total;
		},
	},
	mutations: {
		SET_PRODUCTS: (state, products) => {
			state.products = products;
		},

		SET_HEADER: (state, items) => {
			state.items = items;
		},
		set_cart_product: (state, { product, quantity }) => {
			let productInCart = state.cart.find(item => {
				return item.product.id === product.id;
			});
			if (productInCart) {
				productInCart.quantity += quantity;
				return;
			}
			state.cart.push({ product, quantity });
		},
		remove_cart_product: (state, product_cart) => {
			state.cart = state.cart.filter(item => {
				return item.product.id !== product_cart.product.id;
			});
		},
		decrement: (state, quantity_cart) => {
			state.cart.map(item => {
				if (item.product.id === quantity_cart.product.id) {
					if (item.quantity > 1) item.quantity--;
				}
			});
		},
		increment: (state, quantity_cart) => {
			state.cart.map(item => {
				if (item.product.id === quantity_cart.product.id) {
					item.quantity++;
				}
			});
		},
	},
	actions: {
		GET_PRODUCTS({ commit }) {
			return axios('https://fakestoreapi.com/products', {
				method: 'GET',
			})
				.then(products => {
					commit('SET_PRODUCTS', products.data);
					return products;
				})
				.catch(error => {
					console.log(error);
					return error;
				});
		},

		ITEM_HEADER({ commit }, item) {
			commit('SET_HEADER', item);
		},
		addToCart({ commit }, { product, quantity }) {
			commit('set_cart_product', { product, quantity });
		},
	
		removeCart({ commit }, product_cart) {
			commit('remove_cart_product', product_cart);
		},
		increment({ commit }, quantity_cart) {
			commit('increment', quantity_cart);
		},
		decrement({ commit }, quantity_cart) {
			commit('decrement', quantity_cart);
		},
	},
	modules: {},
	plugins: [createPersistedState()],
});
