<template>
	<div class="v-account">
		<div class="container">
			<h4 class="text-black text-center my-4">My Account</h4>
			<div class="v-account__tabs">
				<div
					class="v-account__tabs-item"
					v-for="(tab, index) in accountTabsItem"
					:key="index"
					:class="{ 'v-account__tabs-item--active': index === activeTab }"
					@click="changeTab(index)"
				>
					{{ tab.name }}
				</div>
			</div>
			<div class="v-account__content">
				<div class="v-account__content_item" v-show="isActive(0)">
					<p>
						Hello Vitatheme (not Vitatheme? Log out) <br />
						From your account dashboard you can view your recent orders, manage
						your shipping and billing addresses, and edit your password and
						account details.
					</p>
				</div>
				<div class="v-account__content_item" v-show="isActive(1)">
					<div class="order-alert">
						<span class="ms-3">No order has been made yet.</span>
						<span class="order-link">BROWSE PRODUCT</span>
					</div>
				</div>
				<div class="v-account__content_item" v-show="isActive(2)">
					<div class="order-alert">
						<span class="ms-3">No downloads available yet.</span>
						<span class="order-link">BROWSE PRODUCT</span>
					</div>
				</div>
				<div class="v-account__content_item" v-show="isActive(3)">
					<p>
						The following addresses will be used on the checkout page by
						default.
					</p>
					<div class="row mt-5">
						<div class="col-md-6 mb-3">
							<h4>Billing address</h4>
							<p class="order-link my-4">ADD</p>
							<small class="small">
								You have not set up this type of address yet.
							</small>
						</div>
						<div class="col-md-6">
							<h4>Shipping address</h4>
							<p class="order-link my-4">ADD</p>
							<small class="small">
								You have not set up this type of address yet.
							</small>
						</div>
					</div>
				</div>
				<div
					class="v-account__content_item"
					v-show="isActive(4)"
				>
					<h4 class="text-center">Account details</h4>
					<div class="details_b" style="margin: 0 auto;">
						<form action="">
							<div class="form_group">
								<input type="text" placeholder="First name*" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Last name*" />
							</div>
							<div class="form_group">
								<input type="text" placeholder="Display name*" />
							</div>
							<small class="small">
								This will be how your name will be displayed in the account
								section and in reviews.
							</small>
							<p class="text-center fw-bold my-4">Password change</p>
							<div class="form_group">
								<input
									type="password"
									placeholder="Current password (leave blank to leave unchanged)"
								/>
							</div>
							<div class="form_group">
								<input
									type="password"
									placeholder="New password (leave blank to leave unchanged)"
								/>
							</div>
							<div class="form_group">
								<input type="password" placeholder="Confirm new password" />
							</div>
						</form>
						<button class="btn_submit w-100 my-5">SAVE CHANGES</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'vAccount',
	data() {
		return {
			accountTabsItem: [
				{ id: 0, name: 'Dashboard' },
				{ id: 1, name: 'Orders' },
				{ id: 2, name: 'Downloads' },
				{ id: 3, name: 'Addresses' },
				{ id: 4, name: 'Account details' },
				{ id: 5, name: 'Logout' },
			],
			activeTab: 0,
		};
	},
	methods: {
		changeTab(index) {
			this.activeTab = index;
		},
		isActive(tab) {
			return this.activeTab === tab;
		},
	},
	mounted() {},
	computed: {},
	watch: {},
};
</script>
<style scoped>
.v-account__tabs {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #d8d8d8;
	margin-bottom: 30px;
}
.v-account__tabs .v-account__tabs-item {
	cursor: pointer;
	margin-right: 30px;
	padding-bottom: 20px;
	font-weight: 400;
	font-size: 20px;
	line-height: 26px;
	color: #707070;
	background-color: #fff;
	border-bottom: 1px solid transparent;
}
.v-account__tabs-item--active {
	color: #000 !important;
	border-bottom: 1px solid #000 !important;
}
.v-account__content_item {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #000000;
}
.order-alert {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #efefef;
	padding: 15px;
	margin-top: 40px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border-top: 2px solid #a18a68;
}
.order-link {
	font-weight: 700;
	font-size: 16px;
	line-height: 21px;
	color: #a18a68;
}
.form_group {
	margin-bottom: 20px;
}
.details_b {
	max-width: 500px;
	width: 100%;
	padding: 20px;
}
</style>
