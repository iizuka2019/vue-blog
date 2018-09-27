import Vue from "vue"

Vue.prototype.$chartColors = {
  red: { bg: 'rgba(229, 115, 115, 0.5)', border: '#F44336' }, pink: { bg: 'rgba(240, 98, 146, 0.5)', border: '#E91E63' }, purple: { bg: 'rgba(186, 104, 200, 0.5)', border: '#9C27B0' },  deep_purple: { bg: 'rgba(149, 117, 205, 0.5)', border: '#673AB7' }, indigo: { bg: 'rgba(121, 134, 203, 0.5)', border: '#3F51B5' },  blue: { bg: 'rgba(100, 181, 246, 0.5)', border: '#2196F3' },    light_blue: { bg: 'rgba(79, 195, 247, 0.5)', border: '#03A9F4' },   cyan: { bg: 'rgba(77, 208, 225, 0.5)', border: '#00BCD4' }, teal: { bg: 'rgba(77, 182, 172, 0.5)', border: '#009688' }, green: { bg: 'rgba(129, 199, 132, 0.5)', border: '#4CAF50' },   light_green: { bg: 'rgba(174, 213, 129, 0.5)', border: '#8BC34A' }, lime: { bg: 'rgba(220, 231, 117, 0.5)', border: '#CDDC39' },    yellow: { bg: 'rgba(255, 241, 118, 0.5)', border: '#FFEB3B' },  amber: { bg: 'rgba(255, 213, 79, 0.5)', border: '#FFC107' },    orange: { bg: 'rgba(255, 183, 77, 0.5)', border: '#FF9800' },   deep_orange: { bg: 'rgba(255, 138, 101, 0.5)', border: '#FF5722' }, brown: { bg: 'rgba(161, 136, 127, 0.5)', border: '#795548' },   blue_grey: { bg: 'rgba(144, 164, 174, 0.5)', border: '#607D8B' },   grey: { bg: 'rgba(224, 224, 224, 0.5)', border: '#9E9E9E' },
  dark_red: { bg: 'rgba(198, 40, 40, 0.5)', border: '#F44336' },  dark_pink: { bg: 'rgba(173, 20, 87, 0.5)', border: '#E91E63' }, dark_purple: { bg: 'rgba(106, 27, 154, 0.5)', border: '#9C27B0' },  dark_deep_purple: { bg: 'rgba(69, 39, 160, 0.5)', border: '#673AB7' },  dark_indigo: { bg: 'rgba(40, 53, 147, 0.5)', border: '#3F51B5' },   dark_blue: { bg: 'rgba(21, 101, 192, 0.5)', border: '#2196F3' },    dark_light_blue: { bg: 'rgba(2, 119, 189, 0.5)', border: '#03A9F4' },   dark_cyan: { bg: 'rgba(0, 131, 143, 0.5)', border: '#00BCD4' }, dark_teal: { bg: 'rgba(0, 105, 92, 0.5)', border: '#009688' },  dark_green: { bg: 'rgba(46, 125, 50, 0.5)', border: '#4CAF50' },    dark_light_green: { bg: 'rgba(85, 139, 47, 0.5)', border: '#8BC34A' },  dark_lime: { bg: 'rgba(158, 157, 36, 0.5)', border: '#CDDC39' },    dark_yellow: { bg: 'rgba(249, 168, 37, 0.5)', border: '#FFEB3B' },  dark_amber: { bg: 'rgba(255, 143, 0, 0.5)', border: '#FFC107' },    dark_orange: { bg: 'rgba(239, 108, 0, 0.5)', border: '#FF9800' },   dark_deep_orange: { bg: 'rgba(216, 67, 21, 0.5)', border: '#FF5722' },  dark_brown: { bg: 'rgba(78, 52, 46, 0.5)', border: '#795548' }, dark_blue_grey: { bg: 'rgba(55, 71, 79, 0.5)', border: '#607D8B' }, dark_grey: { bg: 'rgba(66, 66, 66, 0.5)', border: '#9E9E9E' },
  light_red: { bg: 'rgba(255, 205, 210, 0.5)', border: '#F44336' },   light_pink: { bg: 'rgba(248, 187, 208, 0.5)', border: '#E91E63' },  light_purple: { bg: 'rgba(225, 190, 231, 0.5)', border: '#9C27B0' },    light_deep_purple: { bg: 'rgba(209, 196, 233, 0.5)', border: '#673AB7' },   light_indigo: { bg: 'rgba(197, 202, 233, 0.5)', border: '#3F51B5' },    light_blue: { bg: 'rgba(187, 222, 251, 0.5)', border: '#2196F3' },  light_light_blue: { bg: 'rgba(179, 229, 252, 0.5)', border: '#03A9F4' },    light_cyan: { bg: 'rgba(178, 235, 242, 0.5)', border: '#00BCD4' },  light_teal: { bg: 'rgba(178, 223, 219, 0.5)', border: '#009688' },  light_green: { bg: 'rgba(200, 230, 201, 0.5)', border: '#4CAF50' }, light_light_green: { bg: 'rgba(220, 237, 200, 0.5)', border: '#8BC34A' },   light_lime: { bg: 'rgba(240, 244, 195, 0.5)', border: '#CDDC39' },  light_yellow: { bg: 'rgba(255, 249, 196, 0.5)', border: '#FFEB3B' },    light_amber: { bg: 'rgba(255, 236, 179, 0.5)', border: '#FFC107' }, light_orange: { bg: 'rgba(255, 224, 178, 0.5)', border: '#FF9800' },    light_deep_orange: { bg: 'rgba(255, 204, 188, 0.5)', border: '#FF5722' },   light_brown: { bg: 'rgba(215, 204, 200, 0.5)', border: '#795548' }, light_blue_grey: { bg: 'rgba(207, 216, 220, 0.5)', border: '#607D8B' }, light_grey: { bg: 'rgba(245, 245, 245, 0.5)', border: '#9E9E9E' },
}

Vue.prototype.$colorNumber = [
'indigo',
'cyan',
'amber',
'teal',
'red',
'pink',
'purple',
'deep_purple',
'blue',
'light_blue',
'green',
'light_green',
'lime',
'yellow',
'orange',
'deep_orange',
'brown',
'blue_grey',
'grey',
'dark_red',
'dark_pink',
'dark_purple',
'dark_deep_purple',
'dark_indigo',
'dark_blue',
'dark_light_blue',
'dark_cyan',
'dark_teal',
'dark_green',
'dark_light_green',
'dark_lime',
'dark_yellow',
'dark_amber',
'dark_orange',
'dark_deep_orange',
'dark_brown',
'dark_blue_grey',
'dark_grey',
'light_red',
'light_pink',
'light_purple',
'light_deep_purple',
'light_indigo',
'light_blue',
'light_light_blue',
'light_cyan',
'light_teal',
'light_green',
'light_light_green',
'light_lime',
'light_yellow',
'light_amber',
'light_orange',
'light_deep_orange',
'light_brown',
'light_blue_grey',
'light_grey',
]

Vue.mixin({
  methods: {
    formatDate(raw_date, format) {
      var type = Object.prototype.toString.call(raw_date).slice(8, -1)

      if (format.match(/T/)) {
        var dt = new Date(raw_date)
        var date = new Date(dt.getFullYear(), dt.getMonth() + 1, 0)
      } else {
        var date = new Date(raw_date)
      }
      // console.log('date type =',raw_date ,type)
      if (!format) format = "YYYY-MM-DD hh:mm:ss.SSS"
      format = format.replace(/YYYY/g, date.getFullYear())
      format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2))
      format = format.replace(/M/g, date.getMonth() + 1)
      format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2))
      format = format.replace(/D/g, date.getDate())
      format = format.replace(/TT/g, ("0" + date.getDate()).slice(-2))
      format = format.replace(/T/g, date.getDate())
      format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2))
      format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2))
      format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2))
      if (format.match(/S/g)) {
        var milliSeconds = ("00" + date.getMilliseconds()).slice(-3)
        var length = format.match(/S/g).length
        for (var i = 0; i < length; i++) {
          format = format.replace(/S/, milliSeconds.substring(i, i + 1))
        }
      }
      return format
    },
    clientSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '240px'
        case 'sm': return '260px'
        case 'md': return '340px'
        case 'lg': return '400px'
        case 'xl': return '500px'
      }
    },
    getDefaultImage (post) {
      var imgs = [
        require('./assets/images/article_01.jpg'),
      ]
      return (!post || !post.featured_image) ? imgs[0] : post.featured_image
    },
  }
});
