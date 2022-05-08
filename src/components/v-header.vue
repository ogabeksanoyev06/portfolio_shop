<template>
	<div style="min-height: 60px">
		<div class="v-headerX">
			<div class="container">
				<div class="v-header">
					<div class="d-flex align-items-center justify-content-between">
						<div class="v-header-logo" @click="gotoHome('home')">
							<img src="@/assets/cart-logo/SHOPPE.png" alt="" />
						</div>
						<!-- desktop -->
						<div class="v-header-items">
							<ul class="d-none d-md-flex">
								<li
									v-for="(item, index) in ITEMS"
									class="item"
									:class="$route.name === item.name ? 'activeClass' : ''"
									:key="index"
								>
									<router-link
										@click="$route.name === item.name"
										:to="{ name: item.name }"
										>{{ item.title }}</router-link
									>
								</li>
								<li>|</li>
								<li><img src="@/assets/cart-logo/search.png" alt="" /></li>
								<li>
									<router-link
										class="d-flex align-items-center justify-content-center"
										:to="{ name: 'cart', params: { cart_data: CART } }"
									>
										<span class="header__basket-icon">
											<span class="header__basket-notification">{{
												CART.length
											}}</span>
											<svg
												width="21"
												height="21"
												viewBox="0 0 21 21"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6.76598 13.5766H6.76694C6.76774 13.5766 6.76854 13.5764 6.76934 13.5764H17.9238C18.1984 13.5764 18.4399 13.3942 18.5153 13.1302L20.9763 4.51693C21.0293 4.33124 20.9921 4.13161 20.876 3.97748C20.7597 3.82335 20.5778 3.73267 20.3848 3.73267H5.34709L4.90729 1.7535C4.84465 1.472 4.59503 1.27173 4.30664 1.27173H0.615234C0.275413 1.27173 0 1.54714 0 1.88696C0 2.22678 0.275413 2.5022 0.615234 2.5022H3.81317C3.89104 2.85291 5.91779 11.9734 6.03442 12.4982C5.38058 12.7824 4.92187 13.4343 4.92187 14.1916C4.92187 15.2093 5.74988 16.0374 6.76758 16.0374H17.9238C18.2636 16.0374 18.5391 15.7619 18.5391 15.4221C18.5391 15.0823 18.2636 14.8069 17.9238 14.8069H6.76758C6.4284 14.8069 6.15234 14.5308 6.15234 14.1916C6.15234 13.8529 6.42744 13.5774 6.76598 13.5766V13.5766ZM19.5691 4.96313L17.4597 12.3459H7.26105L5.62042 4.96313H19.5691Z"
													fill="black"
												/>
												<path
													d="M6.15234 17.8828C6.15234 18.9005 6.98035 19.7285 7.99805 19.7285C9.01575 19.7285 9.84375 18.9005 9.84375 17.8828C9.84375 16.8651 9.01575 16.0371 7.99805 16.0371C6.98035 16.0371 6.15234 16.8651 6.15234 17.8828ZM7.99805 17.2676C8.33723 17.2676 8.61328 17.5436 8.61328 17.8828C8.61328 18.222 8.33723 18.498 7.99805 18.498C7.65887 18.498 7.38281 18.222 7.38281 17.8828C7.38281 17.5436 7.65887 17.2676 7.99805 17.2676Z"
													fill="black"
												/>
												<path
													d="M14.8477 17.8828C14.8477 18.9005 15.6757 19.7285 16.6934 19.7285C17.7111 19.7285 18.5391 18.9005 18.5391 17.8828C18.5391 16.8651 17.7111 16.0371 16.6934 16.0371C15.6757 16.0371 14.8477 16.8651 14.8477 17.8828ZM16.6934 17.2676C17.0325 17.2676 17.3086 17.5436 17.3086 17.8828C17.3086 18.222 17.0325 18.498 16.6934 18.498C16.3542 18.498 16.0781 18.222 16.0781 17.8828C16.0781 17.5436 16.3542 17.2676 16.6934 17.2676Z"
													fill="black"
												/>
											</svg>
										</span>
									</router-link>
								</li>
								<li><img src="@/assets/cart-logo/acaunt.png" alt="" /></li>
							</ul>
						</div>
						<!-- mobile -->
						<div class="v-header-mobile-items">
							<ul class="d-flex d-md-none">
								<li>
									<router-link
										class="d-flex align-items-center justify-content-center"
										:to="{ name: 'cart', params: { cart_data: CART } }"
									>
										<span class="header__basket-icon">
											<span class="header__basket-notification">{{
												CART.length
											}}</span>
											<svg
												width="21"
												height="21"
												viewBox="0 0 21 21"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6.76598 13.5766H6.76694C6.76774 13.5766 6.76854 13.5764 6.76934 13.5764H17.9238C18.1984 13.5764 18.4399 13.3942 18.5153 13.1302L20.9763 4.51693C21.0293 4.33124 20.9921 4.13161 20.876 3.97748C20.7597 3.82335 20.5778 3.73267 20.3848 3.73267H5.34709L4.90729 1.7535C4.84465 1.472 4.59503 1.27173 4.30664 1.27173H0.615234C0.275413 1.27173 0 1.54714 0 1.88696C0 2.22678 0.275413 2.5022 0.615234 2.5022H3.81317C3.89104 2.85291 5.91779 11.9734 6.03442 12.4982C5.38058 12.7824 4.92187 13.4343 4.92187 14.1916C4.92187 15.2093 5.74988 16.0374 6.76758 16.0374H17.9238C18.2636 16.0374 18.5391 15.7619 18.5391 15.4221C18.5391 15.0823 18.2636 14.8069 17.9238 14.8069H6.76758C6.4284 14.8069 6.15234 14.5308 6.15234 14.1916C6.15234 13.8529 6.42744 13.5774 6.76598 13.5766V13.5766ZM19.5691 4.96313L17.4597 12.3459H7.26105L5.62042 4.96313H19.5691Z"
													fill="black"
												/>
												<path
													d="M6.15234 17.8828C6.15234 18.9005 6.98035 19.7285 7.99805 19.7285C9.01575 19.7285 9.84375 18.9005 9.84375 17.8828C9.84375 16.8651 9.01575 16.0371 7.99805 16.0371C6.98035 16.0371 6.15234 16.8651 6.15234 17.8828ZM7.99805 17.2676C8.33723 17.2676 8.61328 17.5436 8.61328 17.8828C8.61328 18.222 8.33723 18.498 7.99805 18.498C7.65887 18.498 7.38281 18.222 7.38281 17.8828C7.38281 17.5436 7.65887 17.2676 7.99805 17.2676Z"
													fill="black"
												/>
												<path
													d="M14.8477 17.8828C14.8477 18.9005 15.6757 19.7285 16.6934 19.7285C17.7111 19.7285 18.5391 18.9005 18.5391 17.8828C18.5391 16.8651 17.7111 16.0371 16.6934 16.0371C15.6757 16.0371 14.8477 16.8651 14.8477 17.8828ZM16.6934 17.2676C17.0325 17.2676 17.3086 17.5436 17.3086 17.8828C17.3086 18.222 17.0325 18.498 16.6934 18.498C16.3542 18.498 16.0781 18.222 16.0781 17.8828C16.0781 17.5436 16.3542 17.2676 16.6934 17.2676Z"
													fill="black"
												/>
											</svg>
										</span>
									</router-link>
								</li>
								<li
									class="menu_logo my-auto"
									:class="{ toogleMenu: btnActive }"
									@click="(btnActive = !btnActive), (menuActive = !menuActive)"
								>
									<div></div>
									<div></div>
									<div></div>
								</li>
							</ul>
							<ul class="mobile-items" :class="{ toogleItems: menuActive }">
								<li
									class="mobile-item"
									v-for="(mobile_data, i) in mobile_datas"
									:key="i"
								>
									<router-link :to="{ name: mobile_data.link }">{{
										mobile_data.title
									}}</router-link>
								</li>
								<div class="hr mt-4 mb-3"></div>
								<li class="mobile-item d-flex align-items-center">
									<router-link
										:to="{ name: 'home' }"
										class="d-flex align-items-center"
									>
										<img
											class="me-2"
											src="@/assets/cart-logo/acaunt.png"
											alt=""
										/>
										<span>My Acaunt</span>
									</router-link>
								</li>
								<li class="mobile-item">
									<router-link
										:to="{ name: 'home' }"
										class="d-flex align-items-center"
									>
										<img
											class="me-2"
											src="@/assets/cart-logo/Icon color.png"
											alt=""
										/>
										<span>Logout</span>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'v-header',
	props: {},
	data() {
		return {
			btnActive: false,
			menuActive: true,
			mobile_datas: [
				{ title: 'Home', link: 'home', id: 0 },
				{ title: 'Shop', link: 'shop', id: 1 },
				{ title: 'About', link: 'home', id: 2 },
				{ title: 'Blog', link: 'blog', id: 3 },
				{ title: 'Help', link: 'home', id: 4 },
				{ title: 'Contact', link: 'home', id: 5 },
				{ title: 'Search', link: 'home', id: 6 },
			],
		};
	},
	computed: {
		...mapGetters(['ITEMS', 'CART']),
	},
	methods: {
		...mapActions(['ITEM_HEADER']),
		gotoHome(home) {
			if (home == 'home') {
				this.$router.push('/');
			}
		},
	},
	mounted() {},
};
</script>
<style scoped>
.v-headerX {
	position: fixed;
	background-color: #fff;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	min-height: 60px;
}
.v-header-logo {
	flex: 1;
	cursor: pointer;
}
.v-header {
	border-bottom: 1px solid #e6e6e6;
	height: 60px;
	line-height: 60px;
}
.activeClass a::before {
	content: '';
	position: absolute;
	bottom: -20px;
	height: 2px;
	width: 100%;
	background-color: #000;
}
.v-header-items {
	display: flex;
	align-items: center;
}
.v-header li {
	cursor: pointer;
	margin: 0 10px;
}

.v-header a {
	position: relative;
	color: #000;
	font-size: 16px;
	font-weight: 400;
}
.header__basket-icon {
	position: relative;
}
.header__basket-notification {
	position: absolute;
	top: 15px;
	right: -5px;
	background-color: #00d06c;
	color: #fff;
	font-size: 10px;
	padding: 1px 3px;
	border-radius: 50%;
	width: 15px;
	height: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.header__basket-icon svg path {
	fill: #008ae4;
}
.v-header-mobile-items .menu_logo {
	position: relative;
	width: 30px;
	height: 30px;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.4s;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	overflow: hidden;
}
.v-header-mobile-items .menu_logo div {
	position: absolute;
	width: 20px;
	height: 1px;
	background-color: #000;
	transition: 0.5s;
}
.v-header-mobile-items .menu_logo div:nth-child(1) {
	transform: translateY(-6px);
	width: 20px;
}
.v-header-mobile-items .menu_logo div:nth-child(2) {
	width: 20px;
}
.v-header-mobile-items .menu_logo div:nth-child(3) {
	transform: translateY(6px);
	width: 15px;
	right: 5px;
}
.v-header-mobile-items .menu_logo.toogleMenu div:nth-child(3) {
	opacity: 0;
}
.v-header-mobile-items .menu_logo.toogleMenu div:nth-child(1) {
	width: 20px;
	height: 1px;
	transform: translateY(0px) rotate(45deg);
}
.v-header-mobile-items .menu_logo.toogleMenu div:nth-child(2) {
	width: 20px;
	height: 1px;
	transform: translateY(0px) rotate(315deg);
}
.v-header-mobile-items .mobile-items {
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 61px;
	left: 0;
	width: 100%;
	background-color: #fff;
	transform: translateX(0);
	height: 100vh !important;
	transition: transform 0.5s;
	transition-timing-function: ease;
	transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
	padding: 0 !important;
}
.hr {
	margin: 0 20px;
	border-bottom: 1.5px solid #e6e6e6;
	line-height: normal !important;
}
.v-header-mobile-items .mobile-items .mobile-item {
	font-size: 20px;
	line-height: 35px;
	margin-bottom: 5px;
	padding-left: 10px;
	color: #000;
}
.v-header-mobile-items .mobile-items .mobile-item a {
	font-weight: 500 !important;
}
.v-header-mobile-items .mobile-items.toogleItems {
	transform: translateX(-100%);
}
</style>
