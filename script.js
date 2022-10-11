(() => {
    var button = document.getElementsByTagName("button");
    var screen = document.querySelector(".screen");
    var cache = [];
    var other = [];
    for(var i = 0;i < button.length;i++){
        button[i].addEventListener("click", (e) => {

            if(e.target.innerText == "="){
                screen.innerText = eval(screen.innerText);
            }else {
                screen.innerText += e.target.innerText;
            }
        });
    }

})();