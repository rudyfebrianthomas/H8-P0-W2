function bandingkanAngka(angka1, angka2) {
    // you can only write your code here!
    var a;
    if(angka1<angka2){
        a='true';
    }
    else if( angka1>angka2){
        a='false';
    }
    else{
        a=-1;
    }
    return a;
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false