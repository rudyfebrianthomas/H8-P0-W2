function groupAnimals(animals) {
    // you can only write your code here!
    var a=[];
    var b=0;
    animals.sort(); //sorting dari a-z

    for (i=0;i<animals.length;i++){
        if(a.length === 0){
            a.push([animals[i]]) //array awal
        }
        else if(a[b][0][0] === animals[i][0]){ //cek huruf awalan
            a[b].push(animals[i]) //jika sama push
        } 
        else{
            a.push([animals[i]]) //jika beda array baru
            b++ 
        }
    }
    return a;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]