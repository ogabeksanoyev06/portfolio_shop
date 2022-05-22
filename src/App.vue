<template>
	<div id="app">
		<v-header />
		<page-loader></page-loader>
		<router-view></router-view>
	</div>
</template>
<script>
import vHeader from './components/v-header.vue';
import PageLoader from './components/PageLoader.vue';
export default {
	name: 'app',
	components: { vHeader, PageLoader },
};
</script>
<style lang="scss">
.quantity {
	display: flex;
	justify-content: space-between;
	background: #efefef;
	border-radius: 4px;
	padding: 10px 15px;
	min-width: 100px;
}


#app {
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
	color: #2c3e50;
}
a {
	text-decoration: none;
}
ul {
	list-style: none;
	margin-bottom: 0 !important;
}
</style>
