(() => {
    var button = document.getElementsByTagName("button");
    var span = document.querySelector(".text");
    for(var i = 0;i < button.length;i++){
        button[i].addEventListener("click", (e) => {
            if(e.target.innerText == "←"){
              span.innerText = "";
            }else if(e.target.innerText == "="){
              try{
                span.innerText = eval(span.innerText);
              }catch(err){
                span.style.fontSize = "20pt";
                span.innerText = "The count is generate a error try again";
                setTimeout(() => {
                  span.innerText = "";
                }, 5000)
              }
            }else if(span.innerText.length > 13){
              span.style.fontSize = "20pt";
              span.innerText = "Maximum number reached";
              setTimeout(() => {
                span.innerText = "";
              }, 5000)
            }else {
                span.innerText += e.target.innerText;
            }
          span.style.fontSize = "30pt";
        });
    }

})();
