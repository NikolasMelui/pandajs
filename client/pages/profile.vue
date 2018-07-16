<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-toolbar color="green" dark>
              <v-toolbar-title>PandaJS</v-toolbar-title>
            </v-toolbar>

            <v-list two-line>
              <template v-for="item in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                >
                  {{ item.header }}
                </v-subheader>

                <v-list-tile
                  v-else
                  :key="item.title"
                  avatar
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.link"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ header: 'Links' },
				{
					avatar: require('~/static/fire.png'),
					title: 'Firebase',
					link: '<a href="https://firebase.google.com/" target="_blank">https://firebase.google.com/</a>',
				},
				{
					avatar: require('~/static/nuxt.png'),
					title: 'Nuxt',
					link:
						'<a href="https://ru.nuxtjs.org/faq/heroku-deployment/" target="_blank">https://ru.nuxtjs.org/faq/heroku-deployment/</a>',
				},
				{
					avatar: require('~/static/v.png'),
					title: 'Vutify',
					link: '<a href="https://vuetifyjs.com/ru/" target="_blank">https://vuetifyjs.com/ru/</a>',
				},
				{
					avatar: require('~/static/github.png'),
					title: 'Vuetify / NUXT.js template',
					link:
						'<a href="https://github.com/vuetifyjs/nuxt" target="_blank">https://github.com/vuetifyjs/nuxt</a>',
				},
				{
					avatar: require('~/static/heroku.jpg'),
					title: 'Heroku',
					link: '<a href="https://dashboard.heroku.com/" target="_blank">https://dashboard.heroku.com/</a>',
				},
				{
					avatar: require('~/static/now.png'),
					title: 'Now',
					link:
						'<a href="https://www.npmjs.com/package/micro" target="_blank">https://www.npmjs.com/package/micro</a>',
				},
				{
					avatar: require('~/static/micro.png'),
					title: 'Micro',
					link: '<a href="https://zeit.co/now" target="_blank">https://zeit.co/now</a>',
				},
			],
		};
	},
};
</script>
