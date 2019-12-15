window.onload=function () {
    var desc = document.getElementById("desc")
    var big_img = document.getElementsByClassName("big_img")[0];
    var fj = document.getElementsByClassName("fj")[0]
    var a_list = fj.getElementsByTagName("a")
    var img_list = fj.getElementsByTagName("img");

    for (let i = 0; i < img_list.length; i++) {
        // var a=a_list[i];
        // console.log(a);
        // a.onclick=function () {
        //     desc.innerText=this.getAttribute("title");
        //     return false;
        // }
        var img=img_list[i];
        console.log(img)
        img.onclick=function () {
            desc.innerText=this.getAttribute("title");
            big_img.setAttribute("src",this.getAttribute("src"));
        }
    }
}