function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]:value})
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})
}
function deleteFromObjectByKey(object, key){
  var newObj = delete object.key;
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
