var liuqxin = {

  chunk: function (array, size = 1) {
    var res = []
    var ary = []
    var count = 0
    var i = 0
    if (size == 0) {
      return array
   }
    if (size >= array.length) {
        return array
    }
    for (var i = 0; i < array.length; i++) {
      ary.push(array[i])
      if (ary.length == size) {
          res.push(ary)
          ary = []
      }
  }
  if (ary[0]) {
      res.push(ary)
  }
  return res

  },

  compact: function (array) {
    var res = []
    for (var i = 0; i < array.length; i++){
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  fill: function (array, value,start=0,end=array.length) {
    for (var i = start; i < end; i++){
      array[i]=value
    }
    return array
  },

  drop: function (array, n = 1) {
    var res = []

    for (var i = n; i < array.length; i++){
      res.push(array[i])
    }
    return res
  },

  findIndex: function (array, predicate,fromIndex=0) {
    outer: for (let i = fromIndex; i < array.length; i++) {
      if (typeof predicate === 'string') {
          if (array[i][predicate]) return i;
      }

      if (Array.isArray(predicate)) {
          if (array[i][predicate[0]] === predicate[1]) return i;
      }

      if (typeof predicate === 'object') {
          for (let [key, value] of Object.entries(predicate)) {
              if (array[i][key] !== value) continue outer;
          }

          return i;
      }

      if (typeof predicate === 'function') {
          if (predicate(array[i])) return i;
      }
    }
  },

  findLastIndex: function (array, predicate,fromIndex=array.length-1) {
    outer: for (let i = fromIndex; i > 0; i--) {
      if (typeof predicate === 'string') {
          if (array[i][predicate]) return i;
      }

      if (Array.isArray(predicate)) {
          if (array[i][predicate[0]] === predicate[1]) return i;
      }

      if (typeof predicate === 'object') {
          for (let [key, value] of Object.entries(predicate)) {
              if (array[i][key] !== value) continue outer;
          }

          return i;
      }

      if (typeof predicate === 'function') {
          if (predicate(array[i])) return i;
      }
    }
  },
  flatten: function (array) {
    var res = []
    for (var i = 0; i < array.length; i++){
      if (!(Array.isArray(array[i]))) {
        res.push(array[i])
      } else if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++){
          res.push(array[i][j])
        }
      }
    }
    return res
  },

  flattenDeep: function flattenDeep(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (Array.isArray(item)) {
            let temp = flattenDeep(item)
            for (let j = 0; j < temp.length; j++) {
                res.push(temp[j])
            }
        } else {
            res.push(array[i])
        }
    }
    return res
  },

  flattenDepth: function (array, depth = 1) {
    var res = []

      for (let i of array) {
        if (Array.isArray(i) && depth) {
            res = res.concat(this.flattenDepth(i, depth - 1));
        } else {
            res.push(i);
        }
    }

    return res;
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
