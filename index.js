// ELEMENTS
const navbar = document.getElementById("topbar");
const headEl = document.getElementById("headline-el")
const disappearingElements = document.getElementsByClassName('disapperaring')
const touchableElements = document.getElementsByClassName('touchable')
// programming exp
const progExp = document.getElementById("programming-exp")
const javaBtn = document.getElementById("java-btn")
const bashBtn = document.getElementById("bash-btn")
const cBtn = document.getElementById("c-btn")
const cppBtn = document.getElementById("cpp-btn")
const javascriptBtn = document.getElementById("javascript-btn")
const progBtns = [javaBtn, bashBtn, cBtn, cppBtn, javascriptBtn]
// calendar
const calMonthField = document.getElementById("calmonth")
const calField = document.getElementById("calendarField")
const calMonthNext = document.getElementById("month-next")
const calMonthBack = document.getElementById("month-back")

// CHANGEABLES
const iam = [ ' Timon Ole Ensel               ',
            ' a Student             ',
            ' a Developer             '
]

/* TOUCHABLES
let i = touchableElements.length
while(i--) {
    let tmp = touchableElements[i]
    touchableElements[i].addEventListener('mouseover', function() {
        tmp.style.color = 'black'
    })
    touchableElements[i].addEventListener('mouseleave', function() {
        tmp.style.color = 'gray'
    })
}*/

// TYPER
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
    // TODO add cursor │
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
        disappearingElements[i].style.opacity = 1-(disappearingElements[i].getBoundingClientRect().y - 510) / 500;
    }
    // navbar
    if (window.pageYOffset < headEl.getBoundingClientRect().height * 2) {
        navbar.style.visibility = 'hidden';
    } else {
        navbar.style.visibility = 'visible';
    }
  }
)

// Programming Expandable
let isExpanded = -1
let markedColor = 'black'
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
        progExp.innerHTML = "<div class=\"image\">\n<img class=\"resize\" src=" + image + ">\n</div>"
            +"\n<div class=\"text\">\n<h3>" + text + "\n</div>"
    }
}
javaBtn.addEventListener('click', function() {
    changeProgExp(0, 
        "assets/images/spacentScreenshot.png", 
        "Java was my first programming language and therefor the one I'm probably most experienced in. In 2017 i started to learn it in school. 2020 I expanded my knowledge in it through a university course. Since I've worked on a few private projects, such as an own game (see left) and an interface for a chess analyzing tool.")
})
bashBtn.addEventListener('click', function() {
    changeProgExp(1, 
        "assets/images/spacentScreenshot.png", 
        "Bash. In 2017 i started to learn it in school. 2020 I expanded my knowledge in it through a university course. Since I've worked on a few private projects, such as an own game (see left) and an interface for a chess analyzing tool.")
})
cBtn.addEventListener('click', function() {
    changeProgExp(2, 
        "assets/images/spacentScreenshot.png", 
        "C. In 2017 i started to learn it in school. 2020 I expanded my knowledge in it through a university course. Since I've worked on a few private projects, such as an own game (see left) and an interface for a chess analyzing tool.")
})
cppBtn.addEventListener('click', function() {
    changeProgExp(3, 
        "assets/images/spacentScreenshot.png", 
        "C++. In 2017 i started to learn it in school. 2020 I expanded my knowledge in it through a university course. Since I've worked on a few private projects, such as an own game (see left) and an interface for a chess analyzing tool.")
})
javascriptBtn.addEventListener('click', function() {
    changeProgExp(4, 
        "assets/images/spacentScreenshot.png", 
        "Javascript. In 2017 i started to learn it in school. 2020 I expanded my knowledge in it through a university course. Since I've worked on a few private projects, such as an own game (see left) and an interface for a chess analyzing tool.")
})

// CALENDAR
const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
let avaliableDates = ['18.9.2022','19.9.2022','20.9.2022','21.9.2022','22.9.2022','27.9.2022','28.9.2022','29.9.2022','30.9.2022'
    ,'1.10.2022','2.10.2022','3.10.2022','4.10.2022','5.10.2022','6.10.2022','7.10.2022','9.10.2022','14.10.2022']
let relMonth = 0

calMonthNext.addEventListener('click', function() {
    relMonth++
    reloadCalendar()
})
calMonthBack.addEventListener('click', function() {
    relMonth--
    reloadCalendar()
})
function loadCalendar() {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()

    const calDate = new Date(year, month+relMonth)
    const calDay = calDate.getDate()
    const calMonth = calDate.getMonth()
    const calYear = calDate.getFullYear()

    const firstDay = new Date(calYear, calMonth, 1)
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate()
    const paddingDays = weekdays.indexOf(firstDay.toLocaleDateString('en-us', {weekday: 'long'}))

    calMonthField.innerText = calDate.toLocaleString('en-us', {month: 'long'})
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div')
        daySquare.classList.add('day')
        const dateOfSqare = new Date(calYear,calMonth,i - paddingDays)
        const dateStringOfSquare = dateOfSqare.toLocaleDateString('de-de', {month: 'numeric', day: 'numeric',  year: 'numeric'})
        if(i > paddingDays) {
            daySquare.innerText = i - paddingDays
            // special days
            if (i - paddingDays == day && month == calMonth && year == calYear) {
                daySquare.style.background = '#88e2eb'
                daySquare.style.color = 'white'
            } else if ((i - paddingDays < day && month == calMonth) || month > calMonth || year > calYear) {
                daySquare.style.background = '#ffe7e4'
            } else if (avaliableDates.indexOf(dateStringOfSquare) != -1) {
                daySquare.style.background = '#b8ffb0'
            }
        } else {
            daySquare.classList.add('padding')
        }
        daySquare.addEventListener('click', function() {
            console.log('clicked ' + dateStringOfSquare);
        })
        calField.appendChild(daySquare)
    }
}
function reloadCalendar() {
    calField.innerHTML = ''
    loadCalendar()
}


loadCalendar()