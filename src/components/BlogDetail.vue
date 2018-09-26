<template>
  <div class="mt-3" id="post-body">
    <v-slide-x-transition>
      <v-card v-show="!loading" class="pa-3">
        <v-card-title primary-title class="bb">
          <v-layout row wrap>
            <v-flex xs12>
              <h1>{{ post.title }}</h1>
            </v-flex>
            <v-flex xs12>
              <v-spacer></v-spacer>
              <p class="text-xs-right">公開日：{{ this.formatDate(post.published, "YYYY-MM-DD hh:mm") }}</p>
            </v-flex>
          </v-layout>

        </v-card-title>
        <v-card-text primary-title v-html="post.body" id="post-body" class="text-xs-left pl-4"></v-card-text>
      </v-card>
    </v-slide-x-transition>

    <v-snackbar v-model="snackbar" bottom right multi-line>
      {{ message }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<style>
#post-body img {
  max-width: 100% !important;
}
</style>
<script>
var butter = require('buttercms')(process.env.BUTTER_API_KEY)
export default {
  props : {
    author: [Object, Array],
  },
  data () {
    return {
      slug     : null,
      post     : [],
      loading  : true,
      message  : null,
      snackbar : false,
    }
  },
  methods: {
    getPost () {
      this.slug = this.$route.params.slug
      butter.post.retrieve(this.slug)
      .then(res => {
        // console.log(res.data)
        this.post = res.data.data
        setTimeout(() => {
          this.loading = false
          this.keepHeight()
        }, 400)
      }).catch(err => {
        this.$router.push('/404')
        // console.log(err)
      });
    },
    keepHeight () {
      var div = document.getElementById('post-body')
      if (!div) {
        return
      }
      var h = div.clientHeight
      if (h < 10) {
        return
      }
      // console.log(h)
      div.style.height = h + 'px'
    },
  },
  watch: {
    $route(to, from) {
      this.loading = true
      this.keepHeight()
      this.getPost()
    },
  },
  created () {
    this.loading = true
    this.getPost()
  }
}
</script>