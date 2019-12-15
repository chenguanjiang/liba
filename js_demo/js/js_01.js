window.onload=function () {
    var desc = document.getElementById("desc")
    var big_img = document.getElementsByClassName("big_img")[0];
    var fj = document.getElementsByClassName("fj")[0]
    var a_list = fj.getElementsByTagName("a")
    var img_list = fj.getElementsByTagName("img");
    for (var i = 0; i < img_list.length; i++) {
        (function (i) {
            img_list[i].onclick=function(){
                var img = img_list[i];
                desc.innerText=img.getAttribute("title");
                big_img.setAttribute("src",img.getAttribute("src"));
            }
        })(i)
    }
}
    
