<template>
	<div class="v-home">
		<div class="container">
			<!-- carusel reklama -->
			<div class="mt-5">
				<el-carousel :interval="5000" arrow="always">
					<el-carousel-item v-for="(item, i) in image" :key="i">
						<img class="img-fluid" :src="item.url" alt="" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="index_block mt-5">
				<div class="index_block_item row">
					<div
						class="col-md-4 block_card"
						v-for="item in indexBlock"
						:key="item.id"
					>
						<div class="block_icon">
							<img :src="require('@/assets/logo/' + item.img)" />
						</div>
						<div class="block_content">
							<p class="content_title">{{ item.title }}</p>
							<p class="content_text">{{ item.text }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-5" style="border-bottom: 2px solid #dee2e6 !important">
				<h2 class="fw-bold text-center">
					"Shoppe.uz" - Online store of goods for home and office
				</h2>
				<p class="text-center mt-2">
					Traffic jams, extra costs, a long search for the right products and
					waiting in lines ... Forget everything! Online store "Shoppe.uz"
					delivers food, stationery, household goods and much more for home and
					office.
				</p>
			</div>
			<div class="abt_as">
				<div class="abt_us_items row">
					<div
						class="abt-us_item mb-3 col-12 col-md-4 d-flex flex-column align-items-center"
						v-for="item in abtUs"
						:key="item.id"
					>
						<img :src="require('@/assets/logo/' + item.img)" alt="" />
						<h5 class="fw-bolder">{{ item.title }}</h5>
						<p>
							{{ item.text }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'v-home',
	components: {},
	props: {},

	data() {
		return {
			image: [
				{
					id: 0,
					url: 'https://storage2.alifshop.uz/files?k1=c4cdd7f3-bd5d-446e-af4f-5d274017c7b4&k2=8dae7e063b31e26e32f0aac46cc1eeca36a630578040b3e55b06a91a01fdb57316731bb5e85b14c4632f90e3bd84ae746f8a3ae781f9e7626c5bc4f52051bc19',
				},
				{
					id: 1,
					url: 'https://storage2.alifshop.uz/files?k1=c4cdd7f3-bd5d-446e-af4f-5d274017c7b4&k2=8dae7e063b31e26e32f0aac46cc1eeca36a630578040b3e55b06a91a01fdb57316731bb5e85b14c4632f90e3bd84ae746f8a3ae781f9e7626c5bc4f52051bc19',
				},
				{
					id: 2,
					url: 'https://storage2.alifshop.uz/files?k1=c4cdd7f3-bd5d-446e-af4f-5d274017c7b4&k2=8dae7e063b31e26e32f0aac46cc1eeca36a630578040b3e55b06a91a01fdb57316731bb5e85b14c4632f90e3bd84ae746f8a3ae781f9e7626c5bc4f52051bc19',
				},
			],
			indexBlock: [
				{
					id: 0,
					title: 'And everything for every day',
					text: 'Choose from 40,000 products: we have fruits and vegetables,meat and fish, household and goods for animals',
					img: '1.png',
				},
				{
					id: 1,
					title: 'Both freshness and quality',
					text: 'Be sure: we carefully monitor the freshness and quality of products in the warehouse and at all delivery stages',
					img: '2.png',
				},
				{
					id: 2,
					title: 'And WOW-comfortable',
					text: 'Plan and save time: place and receive orders where and when it is convenient',
					img: '3.png',
				},
			],
			abtUs: [
				{
					id: 0,
					title: 'Boy assortiment',
					text: 'In terms of the abundance of assortment, our online store is in no way inferior to large supermarkets.',
					img: '4.png',
				},
				{
					id: 1,
					title: 'Time saving',
					text: 'You can, without leaving your office, choose the necessary goods from our online store for your home and office.',
					img: '5.png',
				},
				{
					id: 2,
					title: 'Stock',
					text: 'We constantly hold promotions and seasonal sales. The corresponding discounts are marked on the website with special stickers.',
					img: '6.png',
				},
				{
					id: 3,
					title: 'Affordable prices',
					text: 'Only for you - cheaper than in supermarkets and shops! Eliminating the cost of renting a room allows us to reduce the price, so the products in our online store are cheaper than in a standard supermarket.',
					img: '7.png',
				},
				{
					id: 4,
					title: 'Quality control',
					text: 'Direct contracts and deliveries from leading manufacturers, thanks to which you receive only high-quality food delivered to your home and office.',
					img: '8.png',
				},
				{
					id: 5,
					title: 'Fast shipping',
					text: 'When buying goods up to 200,000 soums, delivery is carried out for 9,000 soums within the city of Tashkent. The minimum order amount is 100,000 soums. Your chosen products will be delivered directly to your door.',
					img: '9.png',
				},
				{
					id: 6,
					title: 'Payment Methods',
					text: 'You can pay for your purchases not only in cash, but also with a plastic card, transfer and through the Payme system. All couriers of the Shoppe online store have a terminal for paying with cards.',
					img: '10.png',
				},
				{
					id: 7,
					title: 'Conveniently',
					text: 'For your convenience, our online store has developed an improved order processing and product delivery system. Just add the product to the shopping cart on the site, or place an order by phone and order delivery.',
					img: '11.png',
				},
				{
					id: 8,
					title: 'Catalog',
					text: 'Convenient catalog, where it is easy to choose and pleasant to buy!',
					img: '12.png',
				},
			],
		};
	},
	computed: {},
	methods: {},
	mounted() {},
};
</script>
<style>
.el-carousel__item img {
	height: 100%;
	width: 100%;
	border-radius: 0.28rem !important;
}
.block_card {
	display: flex;
	margin-bottom: 20px;
}
.block_content {
	flex: 1;
	font-family: 'utk';
}
.block_content .content_title {
	font-weight: 700;
	color: #040507;
	font-size: 24px;
	line-height: 1.375rem;
	margin-bottom: 5px;
}
.block_content .content_text {
	font-size: 1rem;
	line-height: 1.295;
	color: #212529;
}
.block_icon {
	width: 32px;
	margin-right: 10px;
}
.block_icon img {
	width: 100%;
}
.abt-us_item img {
	height: 70px;
}
.abt-us_item h5 {
	font-size: 20px;
	font-weight: 700;
	color: #040507;
	margin: 10px 0;
	font-family: 'utk';
	text-align: center;
}
.abt-us_item p {
	font-size: 14px;
	color: #040507;
	font-family: 'utk';
	text-align: center;
}
@media (max-width: 768px) {
	.el-carousel__container {
		height: 200px !important;
	}
}
</style>
