const container = document.querySelector('.container')
const on = document.querySelector('.on')
const off = document.querySelector('.off')

let n = 500
for (let i = 0; i < n; i++) {
    const square = document.createElement('div')
    container.append(square)
    square.classList.add('square')

    square.addEventListener('mouseover', () => itemStyle(square))

    square.addEventListener('mouseleave', () => removeStyle(square))

    on.addEventListener('click',() => {
        itemStyle(square)
    })

    off.addEventListener('click', () =>removeStyle(square))
}

function itemStyle (item){
    item.style.background = randomColor()
    item.style.boxShadow = `2px 2px 2px ${randomColor()}`
    item.style.transform = "rotateY(180deg)"

}

function removeStyle (item) {
    item.style.background = ''
    item.style.transform = ""
    item.style.boxShadow = ``
}

function randomColor () {
    let arr = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0]
    let color = '#'
    for (let i = 0; i < 6; i++) {
         let idx = Math.floor(Math.random() * arr.length)
        color += arr[idx]
    }
    return color

}