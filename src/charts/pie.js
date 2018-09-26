import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: {
    options   : [Object, Array],
    chartData : [Object, Array],
  },
  mounted () {
    // this.summaryPosts()
    this.renderChart(this.chartData, this.options)
  },
}