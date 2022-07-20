function countEvenNumber(arr){
  var length = arr.length;
  var count = 0; 

  for(var i = 0; i < length; i++){
    var num = arr [i];
    if (num % 2 == 0) {
        count++;
    }
  }
  return count;
}  
const array2 = [17, 0, 67, 41, 49, 21,1, 86,76, 2, 54, 14, 93, 84, 14, 77, 35,7, 29, 64 ]
let count= countEvenNumber(array2);
alert("count of even numbers " + count);
