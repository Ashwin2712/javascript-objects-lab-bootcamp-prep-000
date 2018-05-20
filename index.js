var recipes = {}
var recipes2 = Object.assign({}, recipes)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(recipes2, key) {
  delete recipes2.key
  return recipes2
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete objet.key
  return objet
}
