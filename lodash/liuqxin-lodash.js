var liuqxin = {

  chunk: function (array, size = 1) {
    var res = []
    var ary = []
    var count = 0
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
    difference: function difference(array, ...values) {
      var resultAry = []

      var map = {}

      for (var i = 0; i < values.length; i++) {
          for (var j = 0; j < values[i].length; j++) {
              if (!(values[i][j] in map)) {
                  map[values[i][j]] = 1
              } else {
                  map[values[i][j]]++
              }
          }
      }

      for (var i = 0; i < array.length; i++) {
          var val = ((map[array[i]]) || 0)
          if (!val) {
              resultAry.push(array[i])
          }
      }

      return resultAry
  },
  differenceBy: function differenceBy(array, ...values) {
      let lastAry = values.pop
      if (Array.isArray(lastAry)) {
          var action = it => it
      } else {
          action = lastAry.iteratee(lastAry)
      }
      let map = new Map()
      let result = []
      for (let i = 0; i < length; i++) {
          for (let k of values[i]) {
              if (!map.has(action(k))) {
                  map.set(action(k), k)
              }
          }
      }
      for (let k of array) {
          if (!map.has(action(k))) {
              result.push(k)
          }
      }
      return result
  },
  drop: function (array, n = 1) {
    var res = []

    for (var i = n; i < array.length; i++){
      res.push(array[i])
    }
    return res
  },
  dropRight: function  dropRight(array, n = 1) {
    var res = []

    for (var i = 0; i < array.length - n; i++){
      res.push(array[i])
    }
    return res
  },

  dropRightWhile:function dropRightWhile(array, predicate) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (typeof predicate == 'function') {
            if (predicate(array[i])) {
                array.pop()
            } else {
                break
            }
        } else if (Array.isArray(predicate)) {
            if (predicate[1] === array[i][predicate[0]]) {
                array.pop()
            } else {
                break
            }
        } else if (typeof predicate == 'string') {
            if (array[i][predicate] === true) {
                array.pop()
            } else {
                break
            }
        } else if (typeof predicate == 'object') {
            var judge = 1
            for (var key in predicate) {
                if (array[i][key] != predicate[key]) {
                    judge = 0
                    break
                }
            }
            if (judge) {
                array.pop()
            }
        }
    }
    return array
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



  findIndex: function findIndex(array, predicate = identity,fromIndex = 0) {
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

  findLastIndex:function findLastIndex(array, predicate = identity, fromIndex = array.length - 1) {
    if (typeof predicate === "function") {
        for (var i = fromIndex; i >= 0; i--) {
            if (predicate(array[i]) === true) {
                return i
            }
        }

        return -1
    } else if ((typeof predicate === "object") && (Array.isArray(predicate) === false)) {
        var func = matches(predicate)
        for (var i = fromIndex; i >= 0; i--) {
            if (func(array[i]) === true) {
                return i
            }
        }

        return -1
    } else if (Array.isArray(predicate) === true) {
        var func = matchesProperty(predicate[0], predicate[1])
        for (var i = fromIndex; i >= 0; i--) {
            if (func(array[i]) === true) {
                return i
            }
        }

        return -1
    } else if (typeof predicate === "string") {
        for (var i = fromIndex; i >= 0; i--) {
            if (property(predicate)(array[i]) === true) {
                return i
            }
        }

        return -1
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
  flatten: function flatten(array) {
    return array.reduce((res, item) => {
      return res.concat(item)
    },[])
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
  flattenDeep: function flattenDeep(array) {
    if (Array.isArray(flatten(array))) {
      return flatten(flatten(array))
    }
    return flatten(array)

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

  head: function head(array) {
    return array[0]
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
  indexOf: function indexOf(array, value, fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++){
        if (array[i] == value) {
          return i
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
  intersection:function intersection(...arrays) {
    var resultAry = []
    var flag = 1

    for (var i = 0; i < arrays[0].length; i++) {
        for (var j = 1; j < arrays.length; j++) {
            if ((arrays[j]).indexOf(arrays[0][i]) === -1) {
                flag = 0
                break
            }
        }

        if (flag === 0) {
            flag = 1
        } else if (flag === 1) {
            resultAry.push(arrays[0][i])
        }
    }

    return resultAry
  },

  join: function join(array, separator = ',') {
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

  pull: function pull(array, ...values) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (!values.includes(array[i])) {
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
      i++
      j--
    }
    return array
  },

  sortedIndex: function sortedIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= value) {
            return i;
        }
    }
    return array.length;
  },

  groupBy: function groupBy(collection, iteratee = identity) {
    if (typeof iteratee === "function") {
        let resultObj = {}
        collection.forEach(element => {
            if (!(String(iteratee(element)) in resultObj)) {
                resultObj[String(iteratee(element))] = [element]
            } else if (String(iteratee(element)) in resultObj) {
                resultObj[String(iteratee(element))].push(element)
            }
        })
        return resultObj
    } else if (typeof iteratee === "string") {
        let resultObj = {}
        collection.forEach(element => {
            if (!(String(property(iteratee)(element)) in resultObj)) {
                resultObj[String(property(iteratee)(element))] = [element]
            } else if (String(property(iteratee)(element)) in resultObj) {
                resultObj[String(property(iteratee)(element))].push(element)
            }
        })
        return resultObj
    }
  },
  keyBy: function keyBy(collection, iteratee = identity) {
    var map = {}
    var len = collection.length
    for (var i = 0; i < len; i++) {
        if (typeof iteratee == 'function') {
            var key = iteratee(collection[i])
            if (key in map) {
                map[key] = collection[i]
            } else {
                map[key] = collection[i]
            }
        } else if (typeof iteratee == 'string') {
            var key = collection[i][iteratee]
            if (key in map) {
                map[key] = collection[i]
            } else {
                map[key] = collection[i]
            }
        }
    }

    return map
  },


}
