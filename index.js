// ELEMENTS
const navbar = document.getElementById("topbar");
const headEl = document.getElementById("headline-el")
const disappearingElements = document.getElementsByClassName('disapperaring')
const touchableElements = document.getElementsByClassName('touchable')
// skill-table
const progExp = document.getElementById("programming-exp")
const devBtn = document.getElementById("dev-btn")
const arcBtn = document.getElementById("arc-btn")
const fossBtn = document.getElementById("foss-btn")
const itsecBtn = document.getElementById("itsec-btn")
const cloudBtn = document.getElementById("cloud-btn")
const progBtns = [devBtn, arcBtn, fossBtn, itsecBtn, cloudBtn]


// TYPER
const iam = [ ' Timon Ole Ensel               ',
            ' a TUM Student             ',
            ' a Software Architect             ',
            ' a Problem Solver             '
]
let iamText = 'I\'m'
let whoami = 0
let curserPos = 0
let state = false //false=deleting, true=typing
function typer_del() {
    // check for finished deletion
    if(iamText === 'I\'m') {
        state = true
        return
    }
    iamText = iamText.slice(0, iamText.length - 1)
    state = false
}
function typer_add(who) {
    // check for finished typing
    if(iamText.slice(3, iamText.length) === iam[whoami]) {
        state = false
        curserPos = 0
        whoami++
        if(whoami >= iam.length) {
            whoami = 0
        }
        return
    }
    iamText += iam[whoami].charAt(curserPos)
    curserPos++
    state = true
}
function renderTyper() {
    if(state){
        typer_add()
    } else {
        typer_del()
    }
    headEl.innerText = iamText
}
window.setInterval(renderTyper, 108);


// SCROLL SETTINGS
window.addEventListener('scroll', function() {
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
)


// SKILL-TABLE
let isExpanded = -1
let markedColor = 'white'
function resetBtns() {
    progBtns.forEach(element => {
        element.style.color = 'gray'
    });
}
function changeProgExp(tab, image, text) {
    if(isExpanded === tab) {
        isExpanded = -1
        resetBtns()
        progExp.innerHTML = ""
    } else {
        isExpanded = tab
        resetBtns()
        progBtns[tab].style.color = markedColor;
        progExp.innerHTML = "<div class=\"image\">\n<img class=\"resize\" src=" + image + " alt=\"\"></div>"
            +"\n<div class=\"text\">\n<h3>" + text + "\n</div>"
    }
}
// Specified Entries
devBtn.addEventListener('click', function() {
    changeProgExp(0, 
        "assets/images/IDE.webp", 
        "In 2017 I started with Java in school, but quickly expanded my knowledge with low-level languages like C and C++. In my free time I love to work on small scripts, games,or contribute to Open Source Projects to strengthen my knowledge in this area.")
})
arcBtn.addEventListener('click', function() {
    changeProgExp(1, 
        "assets/images/pragmaticsoftwarearchitect-blogspot-com.png", 
        "Big software projects deserve big planning. As a Software Architect, I love to analyze requirements and structures of those projects and got some experience in it while working at IABG and contributing to Open Source Projects.")
})
fossBtn.addEventListener('click', function() {
    changeProgExp(2, 
        "assets/images/GitHubActivity.webp", 
        "Open Source. Probably my favorite part as a software developer. 2022 I started my journey on GitHub. Ever since I contributed to projects like Xournal++ and published my own scripts and games on my GitHub profile @forgottosave.")
})
itsecBtn.addEventListener('click', function() {
    changeProgExp(3, 
        "assets/images/IT-sec-Paper.webp", 
        "During the course of my studies, I took some IT-security related classes: 'IT-Security' by Prof. Claudia Eckhardt and my Seminar Thesis, 'A Discussion on Noise Addition for Relay Attack Detection'. Both gave me important insight into this very important and highly interesting area.")
})
cloudBtn.addEventListener('click', function() {
    changeProgExp(4, 
        "assets/images/AWS.png", 
        "I am happy to announce that soon Cloud Computing will be the newest addition to my set of skills. I am currently in the midst of learning everything about it, using AWS-educate by the AWS cloud service provider.")
})
// set pre-selection for skill-table
devBtn.click();

