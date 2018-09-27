<template>
  <div>
    <v-layout row fill-height align-center justify-center wrap v-if="!loading" style="min-height: 300px;">
      <v-flex xs12 class="text-xs-center">
        <v-chip @click="searchTag(null)" :class="{ accent: (!selectTag) }">All</v-chip>
        <v-chip v-for="(tag, tag_id) in tags" :key="tag_id" @click="searchTag(tag.slug)" :class="{ accent: (tag.slug == selectTag) }">{{ tag.name }}</v-chip>
      </v-flex>
      <v-flex xs12 sm10 md8 style="min-height: 300px;" v-touch="{ left: () => movePage(1), right: () => movePage(-1) }">
        <div v-for="(post, post_id) in posts" :key="post_id">
          <v-slide-x-transition hide-on-leave>
            <v-card class="ma-1" v-show="post_id == (page - 1)">
              <v-img :height="clientSize()" :src="getDefaultImage(post)"></v-img>
              <v-card-title primary-title class="pt-1 pb-1">
                <div style="width: 100%" class="text-xs-center">
                  <v-chip v-if="post.tags.length == 0">未分類</v-chip>
                  <v-chip v-else v-for="(tag, tag_id) in post.tags" :key="tag_id" @click="searchTag(tag.slug)">{{ tag.name }}</v-chip>
                  <h3>{{ post.title }}</h3>
                  <p class="mb-1">公開日 : {{ formatDate(post.published, 'YYYY-MM-DD hh:mm') }}</p>
                  <p class="mb-1 truncate">{{ post.summary }}</p>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="accent" flat outline round :to="{ name:'BlogDetail', params: { slug: post.slug } }">read more</v-btn>
              </v-card-actions>
            </v-card>
          </v-slide-x-transition>
        </div>
      </v-flex>
      <v-flex xs12 text-xs-center class="mb-2 mt-2">
        <v-pagination :length="pageCount" :total-visible="5" v-model="page" circle></v-pagination>
      </v-flex>
      <v-flex xs12 sm10 md8>
        <router-view :author="author" :posts="posts" :tags="tags" id="content"></router-view>
      </v-flex>
    </v-layout>
    <v-layout row fill-height wrap v-else style="min-height: 300px;">
      <v-flex xs12 class="text-xs-center mt-5">
        <v-progress-circular :size="100" color="secondary" class="mt-4" indeterminate></v-progress-circular>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar" bottom right multi-line>
      {{ message }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<style>
.v-carousel__next .v-btn__content, .v-carousel__prev .v-btn__content { color: #555; }
.v-pagination li button { outline: none; }
</style>
<script>
var butter = require('buttercms')(process.env.BUTTER_API_KEY)
import vChart from './BlogChart.vue'
export default {
  props: {
    search: String,
    author: [Object, Array],
  },
  components : {
    vChart,
  },
  data () {
    return {
      posts      : [],
      tags       : [],
      selectTag  : null,
      page       : 1,
      pageCount  : 0,
      message    : null,
      snackbar   : false,
      pageChunk  : 1,
      loading    : false,
    }
  },
  methods: {
    getPosts (pagePos, pageSize = this.pageChunk) {
      this.loading = true
      // var option = { page: pagePos, page_size: pageSize }
      var option = { status: 'published' }
      if (this.selectTag != null) {
        option.tag_slug = this.selectTag
      }

      butter.post.list(option)
      .then(res => {
        this.pageCount = res.data.meta.count
        var posts      = res.data.data
        posts.forEach((elm,index) => { this.posts.push(elm) })
        this.posts.sort((a, b) => { return (a.published < b.published) ? 1 : -1 })
        setTimeout(() => { this.loading = false }, 600)
        // console.log('posts', this.posts)
      })
      .catch(err => {
        // console.log(err)
        this.message  = "ページ読み込み時にエラーが発生しました。"
        this.snackbar = true
        this.loading = false
      })
    },
    clearPost () {
      this.select     = 1
      this.posts      = []
      this.pageCount  = 0
      this.page       = 1
    },
    movePage (dir) {
      // console.log(dir)
      var newPage = this.page + dir
      if (newPage <= 0 || newPage > this.pageCount) {
        return
      }
      this.page = newPage
    },
    getTags () {
      butter.tag.list()
      .then(res => {
        // console.log('tags', res.data)
        this.tags = res.data.data
      })
      .catch(err => {
        this.message  = "ページ読み込み時にエラーが発生しました。"
        this.snackbar = true
      })
    },
    searchTag (slug) {
      this.selectTag = slug
      this.clearPost()
      this.getPosts(this.page)
      this.$router.push('/blog')
    },
    searchWord () {
      this.clearPost()
      this.getPosts(this.posts.length)
    },
    movePost () {
      this.snackbar = false
      this.message  = null
      if (this.page >= this.pageCount && this.page != 1) {
        this.snackbar = true
        this.message  = 'これ以上昔の記事はありません。'
        return
      }
      if (this.page < this.posts.length) {
        return
      }
      var pos = Math.ceil(this.page / this.pageChunk)
      this.getPosts(1, pos * this.pageChunk)
      // console.log('page', this.page, 'chunk', pos)
    },
  },
  watch: {
    page () {
      this.$router.push('/blog')
      this.movePost()
    },
    search () {

    },
    $route (to, from) {
      if (to.name == 'BlogDetail' || to.name == 'BlogChart') {
        setTimeout(() => { this.$vuetify.goTo('#content') }, 600)
      }
    },
  },
  created() {
    this.getPosts(1)
    this.getTags()
  }
}
</script>