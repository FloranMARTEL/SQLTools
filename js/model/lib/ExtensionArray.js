

Array.prototype.groupby = function (keyGetter) {
  const map = new Map();
  this.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

Array.prototype.equals = function (otherArray) {

  //même taille
  if (this.length != otherArray.length){
    return false
  }

  for (let index = 0; index < this.length; index++) {
    if (this[index] != otherArray[index]){
      return false
    }
  }

  return true
}