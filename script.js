let btn = document.querySelector(".btn");
let txtinput = document.querySelector("#txt-input");
let output = document.querySelector(".output-box");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text){
    
     return serverUrl + "?" + "text=" + text;
}
function errorHandler(error){
     console.log("error occured = " + error);
     alert("error occured!! server is busy right now please try again later")
}


btn.addEventListener("click",function clickeventhandler(){
    var inputText = txtinput.value;
    var content;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json =>  {content = json.contents.translated;
                   output.innerText= content; })
    .catch(errorHandler)
     
});
