var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    var a,b,c,join;
    input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
    input.splice(4,1,'Pria','SMA Internasional Metro');
    console.log(input);

    b= input[3].split("/");
        
    switch(b[1]){
        case '01':
            c='Januari';
            break;
        case '02':
            c='Februari';
            break;
        case '03':
            c='Maret';
            break;
        case '04':
            c='April';
            break;
        case '05':
            c='Mei';
            break;
        case '06':
            c='Juni';
            break;
        case '07':
            c='Juli';
            break;
        case '08':
            c='Agustus';
            break;
        case '09':
            c='September';
            break;
        case '10':
            c='Oktober';
            break;
        case '11':
            c='November';
            break;
        case '12':
            c='Desember';
            break;
        default:
            c='Hanya ada bulan 1-12';
            break;
    }
    console.log(c);

    join=b.join('-');

    b.sort(function(a,b){
        return b-a;
    });
    console.log(b);

    console.log(join);

    a=input[1].slice(0,15);
    console.log(a);
}
dataHandling2(input);