let arr = [0,4,9,"h",null,"e",undefined];
 let evenElement = 0;
 let oddElement =  0;
 let anotherElement = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0 || (typeof (arr[i]) !== 'number')) {
    anotherElement++;
  } else {
    if (arr[i] % 2 === 0) {
      evenElement++;
    } else {
      oddElement++;
    }
  }
 }
 console.log('Even elements: ' + evenElement, 'Odd elements: ' + oddElement, 'Another elements: ' + anotherElement);