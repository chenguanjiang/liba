window.onload = function () {
    var desc = document.getElementById("desc");
    var big_img = document.getElementById("big_img");
    var fj = document.getElementsByClassName("fj")[0];
    var img_list = fj.getElementsByTagName("img");
    console.log(img_list);

    for (var i = 0; i < img_list.length; i++) {
        (function (i) {
            var img=img_list[i];
            img.onmouseover = function () {
                desc.innerText = img.getAttribute("title");
                var src = img.getAttribute("src");
                big_img.setAttribute("src", src);
            }
        })(i)
    }
}