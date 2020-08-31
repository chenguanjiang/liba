window.onload=function () {
    myfun();
    bindBtn1();
}
function myfun() {
    var add=(function () {
        var counter=0;
        return function () {counter+=1;return counter;};
    })();
    document.getElementById("btn").addEventListener("click",function () {
        document.getElementById("p").innerHTML=add();
    });
}
function validateForm() {
    var x=document.forms["myForm"]["fname"].value;
    if (x==""){
        alert("内容不能为空！")
    }
}
function changCon() {
    var xhttp;
    if (window.XMLHttpRequest){
        xhttp=new XMLHttpRequest();
    }
    else{
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange=function () {
        if (this.readyState==4 && this.status==200){
            document.getElementById("p1").innerHTML=this.responseText;
        }
    }
    xhttp.open("GET","../other/ajax.txt");
    xhttp.send();
}
function bindBtn1() {
    document.getElementById("btn1").addEventListener("click",function () {
        changCon();
    })
}