module.exports = function toReadable (number) {
  let num = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
  ];
  
  let dozens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',      
  ];
  
  let strNum = number.toString().split('');

  if (number < 21) {
    var Num = num[number];
  } else if (number > 20 || number < 100) {
        if (num[parseInt(strNum[1])] == num[0]) {
            Num = dozens[parseInt(strNum[0])];
        } else {
            Num = dozens[parseInt(strNum[0])] + ' ' + num[parseInt(strNum[1])];
        }
    }

  if (number >= 100) {
      if (num[parseInt(strNum[2])] == num[0]) {
        Num = num[parseInt(strNum[0])] + ' hundred ' + dozens[parseInt(strNum[1])]; 
      } else if (dozens[parseInt(strNum[1])] == dozens[0]) {
        Num = num[parseInt(strNum[0])] + ' hundred ' + num[number % 100];
      } else if (parseInt(strNum[2]) === 0 & parseInt(strNum[1]) === 0) {
        Num = num[parseInt(strNum[0])] + ' hundred';
      } else if (parseInt(strNum[2]) !== 0 & parseInt(strNum[1]) !== 0) {
          Num = num[parseInt(strNum[0])] + ' hundred ' + dozens[parseInt(strNum[1])] + ' ' + num[parseInt(strNum[2])];
      }
      
  }
    
  return Num;
}

