function xo(str) {
    // you can only write your code here!
    var a=0,b=0,c;
    for (var i=0;i<str.length;i++){
        if(str[i]=='x'){
            a+=1;
        }
        else{
            b+=1;
        }
    }
    if(a==b){
        c='true';
    }
    else{
        c='false';
    }
    return c;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true