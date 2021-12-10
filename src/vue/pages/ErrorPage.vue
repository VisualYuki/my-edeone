<template>
	<transition name="fade-in-up">
		<div class="error">
			<div class="title">404</div>
			<div class="message">Такой страницы не существует!</div>
			<b-button class="btn" variant="primary" @click="$router.push('/items')"> Назад </b-button>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "ErrorPage",
	};
</script>

<style lang="scss" scoped>
	//TODO: переделать анимацию

	@keyframes fadeInUp {
		from {
			transform: translate3d(0, 40px, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
	}

	.fade-in-up-leave-to {
		opacity: 0;
		/*transition: opacity 0.3s;*/
	}

	.fade-in-up-enter {
		opacity: 0;
		transform: translate3d(0, 10px, 0);
	}

	.fade-in-up-enter-to {
		opacity: 0;
		animation-duration: 0.7s;
		animation-fill-mode: both;
		animation-name: fadeInUp;
	}

	.error {
		position: absolute;

		width: 100%;
		height: 100%;
		@include indent-2("padding", 100, 10, 100, 10);

		background-image: url("/img/background/error.jpg");
		background-size: cover;

		@include media-breakpoint-down(sm) {
			text-align: center;
		}

		.title {
			@include font-size(130, 70);
			font-weight: 700;
			color: #3f4254;
		}

		.message {
			@include font-size(20, 14);
			font-weight: 400;
			color: #b5b5c3;
		}

		.btn {
			margin-top: 50px;
		}
	}
</style>
