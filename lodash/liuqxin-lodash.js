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
        continue
      } else {
        res.push(array[i])
      }

    }
    return res
  },

  fill: function (array, value,n,m) {
    for (var i = n; i < m; i++){
      array[i]=value
    }
    return array
  },
  drop: function (array, n) {
    var res = []

    for (var i = n-1; i < array.length; i++){
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
  indexOf: function indexOf(array, value, [fromIndex=0]) {
    if (fromIndex >= 0) {
      for (var i = fromIndex; i < array.length; i++){
        if (array[i] == value) {
          return i
        }
      }

    } else {
      for (var i = array.length-1; i >=0; i--){
        if (array[i] == value) {
          return i
        }
      }
    }
    return -1
  },
  lastIndexOf: function lastIndexOf(array, value, [fromIndex=array.length-1]) {

      for (var i = fromIndex; i >=0; i--){
        if (array[i] == value) {
          return i
        }
      }

    return -1
  },
  initial: function initial(array) {
    array.pop()
    return array
  },
  join: function join(array, [separator = ',']) {
    var res = ''
    for (var i = 0; i < array.length; i++){
      res += array[i]
      if (i == array.length - 1) {
        return res
      }
      res +=separator
    }
  },

  last: function last(array) {

    return array[array.length-1]
  },

  pull: function pull(array, [values]) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] != values) {
        res.push(array[i])
      }
    }
    return res
  },
  reverse: function reverse(array) {
    var i = 0
    var j = array.length - 1
    while (i < j) {
      var t = array[i]
      array[i] = array[j]
      array[j] = t
    }
    return array

  },
  groupBy: function groupBy(collection, [iteratee=_.identity]) {
    var map = {}
    var j = array.length - 1
    for (var i = 0; i < collection.length; i++) {
      var t = collection[i].iteratee
      map[t].push(t)
    }
    return map
  },
  keyBy: function keyBy(collection, [iteratee=_.identity]) {
    var map = {}
    var j = array.length - 1
    for (var i = 0; i < collection.length; i++) {
      var t = collection[i].iteratee
      map[t].push(t)
    }
    return map
  },


}
