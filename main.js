var appHeader = document.getElementById("header");
var width = (screen.width - appHeader.offsetWidth)/2;
appHeader.style.right =  width.toString() + "px";
var contentChange = document.getElementById("textChange");
var pointer = document.getElementById("pointer");
var messages = [], index = 0;

var s1 = "Developer", s2 = "Designer";
for(let i = 0; i <= s1.length; i++)
    messages.push(s1.substring(0, i));
for(let i = 0; i <= s2.length; i++)
    messages.push(s2.substring(0, i));
function cycle() {
    contentChange.innerText = messages[index];
    index++;

    if (index === messages.length) {
        index = 0;
    }

    setTimeout(cycle, 300);
}

cycle();
var toggle = 0;
function pointerHide()
{
    if(toggle == 0)
        pointer.innerText = "";
    else
        pointer.innerText = "|";
    toggle = (toggle + 1)%2;
    setTimeout(pointerHide, 500);
}
pointerHide();