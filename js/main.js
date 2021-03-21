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

var appHeader = document.getElementById("header");
window.onscroll = function()
{
    var pixel = window.scrollY;
    if(pixel)
    {
        appHeader.classList.add("header--active");
    }
    else
    {
        appHeader.classList.remove("header--active");
    }
}

const option = {
    threshold: 1
};

const appeareOnScroll = new IntersectionObserver((entries, appeareOnScroll) =>
{
    entries.forEach(entry => {
        const width = entry.target.getAttribute('data-target');
        console.log(width)
        if(!entry.isIntersecting)
            return;
        else
        {
            entry.target.style.width = width;
            appeareOnScroll.unobserve(entry.target);
        }
    })
}, option)

var experienceSkills = document.querySelectorAll(".lengthChange");
experienceSkills.forEach(e => {
    appeareOnScroll.observe(e);
});
