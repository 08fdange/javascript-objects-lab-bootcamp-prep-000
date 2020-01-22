var recipes = {
  sugar: '2 cups'
}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({object}, key, value)
  return object;
}
