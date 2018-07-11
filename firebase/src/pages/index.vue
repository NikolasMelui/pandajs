<template>
	<form @submit.prevent="send">
		<input type="tetx" placeholder="email" v-model="email">
		<input type="password" placeholder="password" v-model="password">
		<button class="btn">Send</button>
	</form>

</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		send() {
			let data = {
				email: this.email,
				password: this.password,
			};
			this.$store.dispatch('send', data);
		},
	},
};
</script>

<style>
</style>
