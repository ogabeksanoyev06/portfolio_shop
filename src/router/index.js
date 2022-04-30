import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/catalog/v-home.vue'),
	},
	{
		path: '/shop',
		name: 'shop',
		component: () => import('@/components/catalog/v-main-wrapper.vue'),
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/components/catalog/v-main-wrapper.vue'),
	},
	{
		path: '/our-story',
		name: 'our-story',
		component: () => import('@/components/catalog/v-main-wrapper.vue'),
	},
	{
		path: '/shop/product',
		name: 'product',
		component: () => import('@/components/catalog/v-product.vue'),
	},
	{
		path: '/shop/cart',
		name: 'cart',
		component: () => import('@/components/cart/v-cart.vue'),
		props: true,
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
