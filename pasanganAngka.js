function pasanganTerbesar(num) {
    // you can only write your code here!
    var a=String(num);
    var b=[];
    for (var i=0;i<a.length-1;i++){
        b[i]=Number(a[i]+a[i+1]);
    }
    var c=b[0];
    for (var j=1;j<b.length; j++){
        if(b[j]>c){
        c=b[j];
        }
    }
    return c;
    }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99