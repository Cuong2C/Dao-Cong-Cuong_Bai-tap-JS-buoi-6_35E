// Bài 1
function soNguyenThoa(){
    
    var tong = 0;
    var ketQua;
    for(var i = 1; tong<10000;i++){
        
        tong +=i;
        ketQua =i;
    }
    ketQua += " là số nguyên thỏa"
    document.getElementById("soNguyenThoa").innerHTML = ketQua;
}
// bài 2
function tongS(){
    var tongS = 0;
    var soX = document.getElementById("soX").value*1;
    var soN = document.getElementById("soN").value*1;
    for(i=1;i<=soN;i++){
        tongS += Math.pow(soX,i);
    }
    var ketQua = "Tổng S(n) là: ";
    ketQua += tongS;
    document.getElementById("tinhTongS").innerHTML = ketQua;
}

// Bài 3
function giaiThua(){
    var soN = document.getElementById("soGiaiThua").value*1;
    var i = 1;
    var giaiThua = 1;
    while(i<=soN){
        giaiThua*=i;
        i++;
    }
    var ketQua = "Giai thừa của " + soN + " là: "
    ketQua += giaiThua;
    document.getElementById("tinhGiaiThua").innerHTML = ketQua;
}
// bài 4
function taoThe(){
    var content = document.getElementById("taoThediv");
    var divTam;
    for(var i=1;i<=10;i++){
        if(i%2==1){
            divTam = document.createElement("div");
            divTam.innerText = "div le"
            divTam.style.backgroundColor = "blue";
            content.appendChild(divTam);
        }else{
            divTam = document.createElement("div");
            divTam.innerText = "div chan"
            divTam.style.backgroundColor = "red";
            content.appendChild(divTam);
        }
       
    }
}

// Bài 5 
function soNguyenTo(a){
    if(a<2){
        return false;
    }else{
        for(var i = 2;i<a;i++){
            if(a%i==0){
                return false;
            }
        }
    }
    
        return true;
}

 function inSNT(){
    var soNhap = document.getElementById("nhapSo").value*1;
   var danhSachSNT="";
    
    for(var i = 1; i<=soNhap;i++){
        if(soNguyenTo(i)){
          danhSachSNT += String(i);
          danhSachSNT += "  "
        }
    }
    document.getElementById("cacSNT").innerHTML = danhSachSNT;
}
