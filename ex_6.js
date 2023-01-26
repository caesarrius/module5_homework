const arr = [];
 let x = typeof(arr[0]);
 let checkArrayElements = arr.every(function(elem) {
  if (typeof elem == x) {
    return true;
  } else {
    return false;
  }
 });
 console.log(checkArrayElements);