const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let result = []
    collection.map(item => callback(item) ? result.push(item) : null)
    return result;
};
//reject([1, 2, 3, 4, 5, 6], isEven);
const reject = function (collection, callbackTest) {
  let result = []
    collection.map(item => !callbackTest(item) ? result.push(item) : null)
    return result;
};

//use indexOf to solve this
const uniq = function (array) {
  return Array.from(new Set(array))
};

const reduce = function (collection, iterator, accumulator) {
  let result = accumulator !== undefined ? accumulator : null;
  if(result !== null){
    for(let i = 0; i< collection.length; i++){
      result = iterator(result, collection[i])
    }
  }
  else{
    result = collection[0]
    for(let i = 1; i< collection.length; i++){
      result = iterator(result, collection[i])
    }
  }
  
  return result
};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
