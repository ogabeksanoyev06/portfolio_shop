<template>
	<div class="v-main-wrapper container">
		<v-catalog></v-catalog>
	</div>
</template>
<script>
import vCatalog from './v-catalog.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	components: { vCatalog },
	name: 'v-main-wrapper',
	props: {},
	data() {
		return {};
	},
	computed: {
		...mapGetters(['PRODUCTS']),
	},
	methods: {
		...mapActions(['GET_PRODUCTS']),
	},
	mounted() {},
};
</script>
<style scoped></style>
