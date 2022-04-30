<template>
	<div v-if="!isloaded" class="preloader">
		<div class="preloader-5"></div>
	</div>
</template>

<script>
export default {
	name: 'pageLoader',
	data: () => {
		return {
			isloaded: false,
		};
	},
	mounted() {
		document.onreadystatechange = () => {
			if (document.readyState == 'complete') {
				this.isloaded = true;
			}
		};
	},
};
</script>

<style lang="scss" scoped>
// -----------------------------------------------------
.preloader {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 999999;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	transition: all 0.5s;
}
.preloader-5 {
	display: block;
	position: relative;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 4px solid transparent;
	border-top-color: #337ab7;
	animation: preloader-5-spin 2s linear infinite;
}
.preloader-5::before {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	right: 5px;
	bottom: 5px;
	border-radius: 50%;
	border: 4px solid transparent;
	border-top-color: #14c2d7;
	animation: preloader-5-spin 3s linear infinite;
}
.preloader-5::after {
	content: '';
	position: absolute;
	top: 15px;
	left: 15px;
	right: 15px;
	bottom: 15px;
	border-radius: 50%;
	border: 4px solid transparent;
	border-top-color: #007784;
	animation: preloader-5-spin 1.5s linear infinite;
}
@keyframes preloader-5-spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
