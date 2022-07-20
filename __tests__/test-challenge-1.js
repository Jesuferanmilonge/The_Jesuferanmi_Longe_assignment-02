function sumOfNumbers(arr){
  var length = arr.length;
  var sum = 0;

  for(var i =0; i< length; i++){
    sum += arr[i];
  }
return sum; 
}
  const array= [68,-68,27,94,72,-25,-51,32,10,64,-94,4,34,-86,90,81,20,-56,-91,-50]
  let sum = sumOfNumbers(array);
  alert("sumArrayOfNumbers is " + sum)
});
