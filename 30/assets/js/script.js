

// 1

const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }

];

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
const body = document.body
body.appendChild(wrapper)

const divPlaylist = document.createElement('div')
divPlaylist.classList.add('playlist')
wrapper.append(divPlaylist)

const title = document.createElement('h1')
title.textContent = 'Playlist'
divPlaylist.insertAdjacentElement('beforebegin', title)

const ol = document.createElement('ol')

wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.alignItems = 'center'
divPlaylist.style.marginBottom = '90px'


for (let item of playList) {
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let author = document.createElement('li');
    let song = document.createElement('li');
    author.innerHTML = `Author: ${item.author}`;
    song.innerHTML = `Song: ${item.song}`;
    ul.style.listStyleType = 'none'
    li.style.marginBottom = '20px'
    author.style.marginBottom = '5px'
    ol.append(li);
    li.append(ul);
    ul.append(author, song)

}

divPlaylist.append(ol)


// 2

const modalWindow = document.createElement('div')
modalWindow.classList.add('modal-window')
wrapper.appendChild(modalWindow)
modalWindow.style.width = '600px'
modalWindow.style.height = '300px'
modalWindow.style.border = '2px solid black'
modalWindow.style.display = 'none'
modalWindow.style.justifyContent = 'center'
modalWindow.style.alignItems = 'center'
modalWindow.style.marginBottom = '90px'





const windowButton = document.createElement('button')
windowButton.classList.add('window-button')
modalWindow.appendChild(windowButton)
windowButton.type = 'button'
windowButton.textContent = 'Close'
windowButton.style.cursor = 'pointer'
windowButton.style.padding = '20px 40px'




const button = document.createElement('button')
button.classList.add('button')
wrapper.append(button)
button.type = 'button'
button.textContent = 'Open'
button.style.cursor = 'pointer'
button.style.padding = '20px 40px'
button.style.marginBottom = '90px'


button.onclick = function () {
    modalWindow.style.display = 'flex'
    button.style.display = 'none'
}


windowButton.onclick = function () {
    modalWindow.style.display = 'none'
    button.style.display = 'block'
}

// 3


const trafficLight = document.createElement('div')
trafficLight.classList.add('traffic-light')
wrapper.append(trafficLight)
trafficLight.style.padding = '20px'
trafficLight.style.display = 'flex'
trafficLight.style.flexDirection = 'column'
trafficLight.style.justifyContent = 'space-between'
trafficLight.style.gap = '20px'
trafficLight.style.border = '2px solid black'
trafficLight.style.marginBottom = '60px'

const trafficLightButton = document.createElement('button')
trafficLightButton.classList.add('traffic-button')
wrapper.append(trafficLightButton)
trafficLightButton.textContent = 'Next color'
trafficLightButton.style.padding = '20px 40px'

for (i = 1; i <= 3; i++) {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    trafficLight.append(circle)
    circle.style.width = '20px'
    circle.style.height = '20px'
    circle.style.border = '2px solid black'
    circle.style.borderRadius = '50%'
    

}



trafficLight.children[0].classList.add('red')
trafficLight.children[0].id = 'red'
trafficLight.children[1].id = 'yellow'
trafficLight.children[2].id = 'green'

const circles = document.querySelectorAll('.circle')
console.log(circles)
let activeLight = 0


trafficLightButton.onclick = function() {
    changeLight()
}
function changeLight() {
    circles[activeLight].className = 'circle'
    activeLight++

    if (activeLight > 2) {
        activeLight = 0
    }

    const currentLight = circles[activeLight]
    currentLight.classList.add(currentLight.getAttribute("id"))

}










