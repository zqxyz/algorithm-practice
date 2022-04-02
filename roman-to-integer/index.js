/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const R = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let sum = 0;
  
  for (let i = 0; i < s.length; i++) {
    let currentInteger = R[s[i]]
    let nextInteger =R[s[i+1]]
    let value = 0;

    if (currentInteger < nextInteger) {
      value = nextInteger - currentInteger;
      i++
    } 
    else {
      value = currentInteger;
    }

    sum += value;
  }

  

  return(sum);

};


console.log(romanToInt("LVIII"))