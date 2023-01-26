let result = +prompt('');
if (typeof result !== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
  console.log('NaN')
} else if (result % 2 === 0) {
  console.log('Число четное')
} else {
  console.log('Число нечетное')
}






