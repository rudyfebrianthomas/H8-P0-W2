function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var a=arr[1]-arr[0];
    var b=true;
    for (var i=arr.length-1;i>0;i--){
        if (a !== (arr[i]-arr[i-1])){
            b=false;
        }
    }
    return b;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false`