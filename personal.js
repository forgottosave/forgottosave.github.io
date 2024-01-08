// ELEMENTS
const navbar = document.getElementById("topbar")
const disappearingElements = document.getElementsByClassName('disapperaring')
const touchableElements = document.getElementsByClassName('touchable')
// selectable boxes
const timeBtn = document.getElementById("time-btn")
const wishBtn = document.getElementById("wish-btn")
const actiBtn = document.getElementById("acti-btn")
const carrBtn = document.getElementById("carr-btn")
const btns = [timeBtn, wishBtn, actiBtn, carrBtn]
const timeSec = document.getElementById("buzytimes")
const wishSec = document.getElementById("wishlist")
const actiSec = document.getElementById("activities")
const secs = [timeSec, wishSec, actiSec]


// SCROLL SETTINGS
function onScroll() {
	// disappearing elements
    var currScrollPos2 = window.pageYOffset
    let i = disappearingElements.length
    while(i--) {
        disappearingElements[i].style.opacity = 1-(disappearingElements[i].getBoundingClientRect().y - window.innerHeight * 0.5) / 400;
    }
    // navbar
    navbar.style.visibility = 'visible';
    let toploc = -50+0.5*window.pageYOffset;
    if (toploc > 4) {
      toploc = 4;
    }
    navbar.style.top = toploc+"px";
}
window.addEventListener('scroll', onScroll
)


// SKILL-TABLE
let isExpanded = -1
let markedColor = 'white'
function resetBtns() {
    secs.forEach(element => {
        element.style.visibility = 'collapse'
        element.style.height = '0'
    });
    btns.forEach(element => {
        element.style.color = 'gray'
    });
}
function changeProgExp(tab) {
    if(isExpanded !== tab) {
        isExpanded = tab
        resetBtns()
        secs[tab].style.height = '100%'
        secs[tab].style.visibility = 'visible'
        btns[tab].style.color = 'white'
        onScroll()
    }
}
// Specified Entries
timeBtn.addEventListener('click', function() {
    changeProgExp(0)
})
wishBtn.addEventListener('click', function() {
    changeProgExp(1)
})
actiBtn.addEventListener('click', function() {
    changeProgExp(2)
})
carrBtn.addEventListener('click', function() {
    window.location.href = "https://timon-ensel.de"
})
// set pre-selection for skill-table
changeProgExp(0);

