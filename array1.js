function balikString(a){
    var b='';
    for (var i=a.length-1;i>=0;i--){
        b+=a[i];
    }
    return b;
}
console.log(balikString('Hello World!'));