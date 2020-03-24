function fibonacciGenerator(num) {
  if (isNaN(num)) {    return [];  }
  if (num === 1) {    return [0];  }
  if (num === 2) {    return [0, 1];  }

  let fibArr = [0, 1];
  while (num > fibArr.length) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  }
  
  return fibArr;
}

function printFib(fibNum) {
  let renderDom = document.getElementById("render-dom");
  renderDom.innerHTML = fibonacciGenerator(fibNum)
    .map(num => `<p>${num}</p>`)
    .join(" ");
}


printFib(22);

