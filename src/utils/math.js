function standardDeviation(values) {
  var avg = average(values);

  var squareDiffs = values.map(function (value) {
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev.toFixed(2);
}

function average(data) {
  var sum = data.reduce(function (sum, value) {
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg.toFixed(2);
}

function mode(array) {
  return array.reduce((accumulator, number) => number > accumulator? number : accumulator, 0);
}

function closest(numeros, num) {
  let cercano = 0;
  let diferencia = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === num) {
      return numeros[i];
    } else {
      if(Math.abs(numeros[i]-num)<diferencia){
        cercano=numeros[i];
        diferencia = Math.abs(numeros[i]-num);
      }
    }
  }
  return cercano;
}
