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
	},
	mutations: {
		SET_PRODUCTS: (state, products) => {
			state.products = products;
		},

		SET_HEADER: (state, items) => {
			state.items = items;
		},
		set_cart_product: (state, { product, quantity }) => {
			state.cart.push({ product, quantity });
		},

		DECREMENT: (state, index) => {
			if (state.cart[index].quantity > 1) {
				state.cart[index].quantity--;
			}
		},
		INCREMENT: (state, index) => {
			if (state.cart[index].quantity < 20) {
				state.cart[index].quantity++;
			}
		},

		// SET_CART_PRODUCT: (state, product) => {
		// 	if (state.cart.length) {
		// 		let isProductExists = false;
		// 		state.cart.map(item => {
		// 			if (item.title === product.title) {
		// 				isProductExists = true;
		// 				item.quantity += 1;
		// 			}
		// 		});
		// 		if (!isProductExists) {
		// 			state.cart.push(product);
		// 		}
		// 	} else {
		// 		state.cart.push(product);
		// 	}
		// },
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
	},
	modules: {},
	plugins: [createPersistedState()],

});
