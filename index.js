function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]:value})
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})
}
function deleteFromObjectByKey(object, key){
  delete object.key;
  return object
}