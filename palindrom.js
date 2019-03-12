function palindrome(kata) {
    // you can only write your code here!
    var a='';
    for (i=kata.length-1;i>=0;i--){
        a+=kata[i];
    }
    if(a==kata){
        a='true';
    }else{
        a='false';
    }
    return a;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false