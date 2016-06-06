// 1. Palindrome
function palindrome(str) {
  var len = str.length;
  for (var i = 0; i < Math.floor; i++) {
    if (str[i] !== str[len - 1 - i])  {
        return false;
    }
  }
  return  true;
}

console.log(palindrome("racecar"));

// 2.dashInsert

function dashes(number){
    var numString = '';
    var numArr = number.toString().split('');
    console.log(numArr);
    for(i = 0; i < numArr.length; i++){
        if(numArr[i] % 2 === 1 && numArr[i+1] % 2 === 1){
            numString += numArr[i] + '-';
        }else{
            numString += numArr[i];
        }
    }
    console.log(numString);
}


dashes(456379);

// 3. caesarCipher

function caesarCipher(plaintext, shiftAmount) {
    var ciphertext = "";
    for(var i = 0; i < plaintext.length; i++) {
        var plainCharacter = plaintext.charCodeAt(i);
        if(plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shiftAmount) % 26 + 97);
        } else if(plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += String.fromCharCode((plainCharacter - 65 + shiftAmount) % 26 + 65);
        } else {
            ciphertext += String.fromCharCode(plainCharacter);
        }
    }
    return ciphertext;
}

console.log(caesarCipher("cupcake", 2));
