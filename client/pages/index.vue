<template>
  <v-app>
    <v-toolbar dark color="green">
      <v-toolbar-title>PandaJS</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg>
          <v-alert
            v-if="notification !== null"
            :value="true"
            :type="notification.status"
          >
            {{ notification.message }}
          </v-alert>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              type="email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passRules"
              :counter="6"
              label="Password"
              required
              type="password"
            ></v-text-field>
            
            <v-btn
              :disabled="!valid"
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>


<script>
export default {
	data: () => ({
		valid: true,
		password: '',
		passRules: [
			v => !!v || 'Name is required',
			v => (v && v.length >= 6) || 'Name must be less than 10 characters',
		],
		email: '',
		emailRules: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'],
	}),

	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				// Native form submission is not yet supported
				this.$store.dispatch('send', {
					password: this.password,
					email: this.email,
				});
			}
		},
		clear() {
			this.$refs.form.reset();
		},
	},

	computed: {
		notification() {
			return this.$store.getters.getNotification;
		},
	},
};
</script>
