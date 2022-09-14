var liuqxin = {

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
    var res = []
    if (n > array.length) {
      return []
    }
    for (var i = 0; i < n; i++){
      res[i]=array[i]
    }
    return res
  },
  findIndex: function (array, x) {
    for (var i = 0; i < array.length; i++){
      if (res[i] == x) {
        return i
      }
    }
    return -1
  },
  findLastIndex: function (array, x) {
    for (var i = array.length-1; i >=0; i--){
      if (res[i] == x) {
        return i
      }
    }
    return -1
  },
  flatten: function (array) {
    var res = []
    for (var i = 0; i < array.length; i++){
      for (var j = 0; j < array[i].length; j++){
        res.push(array[i][j])
      }
    }
    return res
  },
  flattenDeep: function (array) {
    if (flatten(array) == this.flattenDeep(array)) {
      return array
    }
    flatten(array)
  },

  flattenDepth: function (array,n) {
    var res = []
    while (n) {
      array = res
      for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++){
          res.push(array[i][j])
        }
      }
      n--
    }
    return res
  },
  fromPairs: function (array) {
    var map = {}
    for (var i = 0; i < array.length;i++) {
      map[array[i][0]]=array[i][1]
    }
    return map

  },
  toPairs: function (object) {
    var map = []
    for (var key of object) {
      var res = []
      res[0] = key
      res[i] = object[key]
      map.push(res)
    }
    return map

  },
  head: function (array) {
    if (array.length == 0) {
      return array
    }
    return array[0]

  },




}
