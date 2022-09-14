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

  compact: function (array) {
    var res = []
    for (var i = 0; i < array.length; i++){
      if (array[i] == false || array[i] == null || array[i] == 0 || array[i] == "" || array[i] == undefined || array[i] == NaN) {
        i++
      } else {
        res.push(array[i])
      }

    }
    return res
  },

  fill: function (array, value) {
    for (var i = 0; i < array.length; i++){
      array[i]=value
    }
    return array
  },
  drop: function (array, n) {
    for (var i = 0; i < array.length; i++){
      array[i]=value
    }
    return array
  },



}
