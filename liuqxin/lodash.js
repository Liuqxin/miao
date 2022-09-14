var lodash = {

  chunk: function (array, size) {
    var res = {}
    var mid = []
    var count = 0
    var i = 0
    while (i < array.length) {
      mid = []
      var n = i+3
      while (i <= n &&i< array.length) {
        mid.push(array[i])
        i++
      }
      res[count] = mid
      count++
    }
    return res
  },

  compact: function() {},

  fill: function() {},

}
