window.onload = function () {
    var desc = document.getElementById("desc");
    var big_img = document.getElementById("big_img");
    var fj = document.getElementsByClassName("fj")[0];
    var img_list = fj.getElementsByTagName("img");
    console.log(img_list);

    for (let i = 0; i < img_list.length; i++) {
        (function (i) {
            img_list[i].onmouseover = function () {
                desc.innerText = img_list[i].getAttribute("title");
                var src = img_list[i].getAttribute("src")
                console.log(src)
                big_img.setAttribute("src", src);
            }
        })(i)
    }
}