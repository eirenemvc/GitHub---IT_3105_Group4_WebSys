
var message= document.getElementById("message");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function(){
    message.innerHTML = "You clicked the message!";

}
btn2.onclick = function(){
    document.body.style.backgroundColor = "lightblue";
}