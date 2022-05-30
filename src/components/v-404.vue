<template>
	<div class="error">
		<h3>404 ERROR</h3>
		<p class="text-center">This page not found; <br> back to home and start again</p>
        <router-link class="btn_submit_outline" :to="{name:'home'}">HOMEPAGE</router-link>
	</div>
</template>
<script>
export default {
	name: 'vError',
	data() {
		return {};
	},
	methods: {},
	computed: {},
	mounted() {},
};
</script>
<style>
.error{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    padding: 20px;
}
</style>
