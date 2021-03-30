var element = document.getElementById("scrolling-to-1");
var element1 = document.getElementById("main-body");
var element2 = document.getElementById("players-container");

var homeId = document.getElementById("home-actual-id");
var vipId = document.getElementById("vip-actual-id");

var playersId = document.getElementById("players-actual-id");
var prevScrollPos = window.pageYOffset;


var i = 0;
var backgrounds = [
    './20210116115945_1.jpg',
    './20210124214618_1.png',
    './20210331004557_1.png'
];

function scrollTo1()
{
    element.scrollIntoView(true);
}

function scrollToTop()
{
    element1.scrollIntoView(true);
}

function scrollToPlayers()
{
    element2.scrollIntoView(true);
}

fetch('https://', {
        method: 'GET',
        headers: {
            'origin': 'anonymous'
        }
    })
    .then(response => {
        return response.text();
    })
    .then(parsed => {
        const x2js = new X2JS();
        const dataAsJson = x2js.xml_str2json(parsed);
        return dataAsJson;
    })
    .then(data => {
        document.getElementById('steam-group-members').innerHTML = data.memberList.memberCount;
    })
    .catch( err => {
        console.log(err.message);
    });

if(window.screen.width <= 1049)
{
    homeId.innerHTML = "<i class='fas fa-home'></i>";
    vipId.innerHTML = "<i class='fas fa-tags'></i";
    playersId.innerHTML = "<i class='fas fa-server'></i>";
}

window.onscroll = function()
{
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos > window.pageYOffset)
    {
        document.getElementById("nav-bar").style.top = "0px";
    } else 
    {
        document.getElementById("nav-bar").style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
}

function changeBg(color)
{
    document.getElementById("players-container").style.backgroundColor = color;
}

function changeBgVip(color)
{
    document.getElementById("scrolling-to-1").style.backgroundColor = color;
}

setInterval(function() {
    document.getElementById("main-1").style.backgroundImage = 'url(' + backgrounds[i]+ ')';
    i++;

    if(i == backgrounds.length)
    {
        i = 0;
    }

}, 5000);
