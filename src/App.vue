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
.btn_submit_outline {
	background: #fff;
	border: 1px solid #000000;
	color: #000;
	font-weight: 500;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 21px;
	border-radius: 4px;
	padding: 10px;
	margin-top: 20px;
}
.btn_submit {
	background: #000;
	border: 1px solid #000000;
	color: #fff;
	font-weight: 400;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 21px;
	border-radius: 4px;
	padding: 10px;
	margin-top: 20px;
}
.form_group input {
	outline: none;
	border: none;
	border-bottom: 1px solid #d8d8d8;
	width: 100%;
	font-size: 14px;
	color: #707070;
	font-weight: 500;
	font-family: 'DM Sans';
	padding-bottom: 10px;
}
.small {
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	color: #707070;
}

#app {
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
	color: #2c3e50;
}
a {
	text-decoration: none;
}
a:hover {
	color: #fff;
}
ul {
	list-style: none;
	margin-bottom: 0 !important;
}
p {
	margin-bottom: 0 !important;
}
</style>
