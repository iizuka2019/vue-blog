<template>
  <v-expansion-panel expand v-model="panel">
    <v-expansion-panel-content>
      <div slot="header" class="headline">Charts</div>
      <v-tabs   icons-and-text class="elevation-1 hidden-md-and-up">
        <v-tabs-slider color="accent"></v-tabs-slider>
        <v-tab href="#pie-chart">
          <v-icon>pie_chart</v-icon>
          Tags
        </v-tab>
        <v-tab href="#line-chart">
          <v-icon>show_chart</v-icon>
          Posts
        </v-tab>
        <v-tab-item id="pie-chart">
          <v-card>
            <v-card-text>
              <v-layout row wrap align-center justify-center>
                <v-flex xs10 sm8>
                  <pie-chart :chart-data="chart"></pie-chart>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item id="line-chart">
          <v-card>
            <v-card-text>
              <v-layout row wrap align-center justify-center>
                <v-flex xs10 sm8>
                  <line-chart :chart-data="line"></line-chart>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
      <v-card class="hidden-sm-and-down">
        <v-card-text>
          <v-layout row wrap align-center justify-center>
            <v-flex md6 xl4>
              <pie-chart :chart-data="chart"></pie-chart>
            </v-flex>
            <v-flex md6 xl4>
              <line-chart :chart-data="line"></line-chart>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

</template>

<script>
import PieChart  from '../charts/pie.js'
import LineChart from '../charts/line.js'

export default {
  props : {
    posts : [Object, Array],
    tags  : [Object, Array],
  },
  components : {
    PieChart,
    LineChart,
  },
  data () {
    return {
      chart  : null,
      line   : null,
      labels : null,
      color  : null,
      cData  : null,
      panel  : [true],
    }
  },
  mounted () {
    this.createOptions()
    this.summaryPosts()
  },
  watch : {
    posts () {
      this.createOptions()
      this.summaryPosts()
    },
    tags () {
      this.createOptions()
      this.summaryPosts()
    },
  },
  methods: {
    createOptions () {
      var pieLabels  = []
      var lineLabels = []
      var lineData   = []
      var pieData    = []
      var date       = new Date()
      var bg         = []
      var bdr        = []
      var color      = this.$chartColors
      var cn         = this.$colorNumber

      date.setDate(date.getDate() - 14)
      for (let cnt = 0; cnt < 14; cnt++) {
        date.setDate(date.getDate() + 1)
        lineLabels.push(this.formatDate(date, "M-D"))
        lineData.push(0)
      }

      this.tags.forEach((tag, i) => {
        pieLabels.push(tag.name)
        pieData.push(0)
        let c = color[cn[i]]
        bg.push(c.bg)
        bdr.push(c.bg)
      })
      pieLabels.push('未分類')
      pieData.push(0)
      bg.push(color.grey.bg)
      bdr.push(color.grey.border)
      this.color = {
        pieBg   : bg,
        pieBdr  : bdr,
        lineBg  : color.indigo.bg,
        lineBdr : color.dark_indigo.bg,
      }
      this.labels = {
        pie  : pieLabels,
        line : lineLabels,
      }
      this.cData = {
        pie  : pieData,
        line : lineData,
      }
    },
    summaryPosts () {
      var pieData  = []
      var lineData = []
      var postDate = []

      pieData = this.cData.pie

      this.posts.forEach((post) => {
        if (post.tags.length == 0) {
          pieData[pieData.length - 1]++
        }
        this.tags.forEach((tag, i) => {
          post.tags.forEach((t) => {
            if (t.name == tag.name) {
              pieData[i]++
            }
          })
        })
        postDate.push(this.formatDate(post.published, "M-D"))
      })

      this.labels.line.forEach((day, i) => {
        let a = postDate.filter((val) => { return val == day })
        lineData.push(a.length)
      })

      console.log(this.labels)


      this.chart = {
        labels   : this.labels.pie,
        datasets : [{
          data            : pieData,
          backgroundColor : this.color.pieBg,
          borderColor     : this.color.pieBdr,
          borderWidth     : 1,
        }]
      }
      this.line = {
        labels   : this.labels.line,
        datasets : [{
          data            : lineData,
          label           : 'posts',
          lineTension     : 0,
          backgroundColor : this.color.lineBg,
          borderColor     : this.color.lineBdr,
          borderWidth     : 1,
        }]
      }
    },
  },
}
</script>