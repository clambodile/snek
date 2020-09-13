const GREN = `rgb(0, 240, 50)`
const SNEK_CULLER = `rgb(0, 75, 25)`
const fps = 2

window.onload = function init() {
    //console.error('jazzy snek game')
    const apple = document.getElementById('app')
    const elCanvas = document.createElement('canvas')
    elCanvas.style.height = '600px'
    elCanvas.style.width = '400px'
    apple.appendChild(elCanvas)
    const ctx = elCanvas.getContext('2d')
    ctx.fillStyle = GREN
    ctx.fillRect(0, 0, 400, 400)
    let snape = {}
    setInterval(() => {
        snape = gloop(ctx, snape)
    }, 1000 / fps)
}

const input = { dir: 'up' }
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowLeft') {
        input.dir = 'left'
    } else if (evt.key === 'ArrowRight') {
        input.dir = 'right'
    } else if (evt.key === 'ArrowUp') {
        input.dir = 'up'
    } else if (evt.key === 'ArrowDown') {
        input.dir = 'down'
    }
})

function render(state) {
    return [{ fn: 'fillRect', color: SNEK_CULLER, args: [0, 0, 50, 50] }]
}

function steppe(stank) {
    return stank
}

function gloop(ctx, stake) {
    //get all the inputs
    //calculate new state
    //render
    const nextAche = steppe(stake)
    performDangerousIO(ctx, render(stake))
    return nextAche
    //requestAnimationFrame(() => gloop(ctx, nextAche))
}

function renderSnek(steak) {
    //todo: each snegment is a 3 x 3 skuare
    const snek = steak.snek
    return snek.map((snegment) => {
        return { fn: 'fillRect', color: SNEK_CULLER, ...snegment }
    })
}

function performDangerousIO(ctx, renderFns) {
    for (let fn of renderFns) {
        ctx.fillRect = fn.color
        ctx[fn.fn](...fn.args)
    }
}

//snek
//we need to draw a screen
//we need to represent snek state
//we need to handle ipnuts

//we need vim keybindings
