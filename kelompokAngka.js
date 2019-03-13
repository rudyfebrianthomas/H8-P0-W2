function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var genap=[];
    var ganjil=[];
    var kel3=[];   
    var hasil=[];

    for (var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            if(arr[i]%3==0){
                kel3.push(arr[i]);
            }
            else{
                genap.push(arr[i]);
            }
        }
        else{
            ganjil.push(arr[i]);
        }
    }
    hasil.push(genap);
    hasil.push(ganjil);
    hasil.push(kel3);
    return hasil;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]