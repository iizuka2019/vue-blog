<template>
  <v-app id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-navigation-drawer app right v-model="drawer">

      <v-list dense>
        <v-list class="pa-0">
          <v-list-tile class="bb">
            <h3><router-link to="/blog">{{ this.$BlogTitle }}</router-link></h3>
          </v-list-tile>
<!--           <v-list-tile class="pb-2 bb">
            <v-text-field hide-details prepend-icon="search" single-line style="width:200px;" color="accent" v-model="search" placeholder="Search"></v-text-field>
          </v-list-tile> -->
          <v-card class="elevation-0 bb">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="author.profile_image">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>author : {{ author.first_name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-card-text class="pt-2 pb-2 pl-3 pr-3 text-xs-left">
              <span v-html="author.bio" class="caption"></span>
            </v-card-text>
          </v-card>
        </v-list>
<!--         <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
        <v-list-tile to="/blog">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blog</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/blog/charts">
          <v-list-tile-action>
            <v-icon>show_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Chart</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group prepend-icon="timeline" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Current Posts</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="(post, post_id) in posts" :key="post_id" :to="{ name: 'BlogDetail', params:{ slug: post.slug } }">
            <v-list-tile-title v-text="post.title" class="pl-4 truncate"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>


      </v-list>

    </v-navigation-drawer>

    <v-toolbar app dark class="primary" primary>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ this.$BlogTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon flat color="accent" to="/blog/charts">
        <v-icon>show_chart</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content v-scroll="onScroll">
      <v-container fluid>
        <v-scroll-x-transition leave-absolute>
          <router-view :search="search" :author="author"></router-view>
        </v-scroll-x-transition>
      </v-container>
    </v-content>

    <div>
      <v-fade-transition>
        <div v-show="offsetTop > 150">
          <v-btn color="secondary" fab fixed bottom right small class="mb-4" @click="$vuetify.goTo('#app')">
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
          <v-btn color="primary"   fab fixed bottom right small class="mb-4" @click="tweet" style="margin-right: 48px;">
            <v-icon>share</v-icon>
          </v-btn>
        </div>
      </v-fade-transition>
    </div>



    <v-footer app dark>
      <div>
        <a href="https://buttercms.com" target="_blank">
          <v-img :src="logo" width="100"></v-img>
        </a>
      </div>
      <v-spacer></v-spacer>
      <div class="mr-2"><a href="https://twitter.com/mao_sum" target="_blank" class="accent--text">@mao_sum</a> &copy;{{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<style>
  .bb { border-bottom: 1px solid #ddd; }
  </style>
  <script>
  var butter = require('buttercms')(process.env.BUTTER_API_KEY)
  export default {
    name: 'App',
    data () {
      return {
        author : [],
        drawer : false,
        search : null,
        posts  : [],
        logo   : require('./assets/butter-w.png'),
        offsetTop : 0,
      }
    },
    methods: {
      getAuthor () {
        butter.author.list().then(res => {
        // console.log('author', res.data.data[0])
        this.author = res.data.data[0]
      })
      },
      getCurrentPost () {
        butter.post.list({
          page      : 1,
          page_size : 5,
        })
        .then(res => {
        // console.log(res)
        this.posts = res.data.data
      })
        .catch(err => {

        })
      },
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      },
      tweet () {
        var s, url
        var title = document.getElementById('twitter-title').textContent
        s = (!title || title.length == 0) ? this.$BlogTitle : title
        // s   = this.post.title
        if (this.author.twitter_handle.length > 0) {
          s = '@' + this.author.twitter_handle + 'さんから - ' + s + "%0a"
        }
        url = document.location.href
        if (s != "") {
          if (s.length + url.length > 140) {
          // alert("テキストが140字を超えています")
          s = s.substr(0, 137 - url.length) + '...'
        }
        url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s
        window.open(url, "_blank", "width=600,height=260")
      }
    },
  },
  created () {
    this.getAuthor()
    this.getCurrentPost()
  },
}
</script>
