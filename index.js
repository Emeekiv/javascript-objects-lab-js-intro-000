function updateObjectWithKeyAndValue(object, key, value){
  var newObj = object.assign({}, [key], value)
  return newObj
}
