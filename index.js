console.log("Hello, GAI.")
//first things first, make snake

const gren = `rgb(0, 240, 50)`
const snekCuller = `rgb(0, 75, 25)`
var fps = 2

function init() {
    //console.error('jazzy snek game')
    const app = document.getElementById("app")
    const canvas = document.createElement("canvas")
    canvas.style.height = "800px"
    canvas.style.width = "600px"
    app.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = gren
    ctx.fillRect(0, 0, 400, 400)
    //how precizn????
    //TODO
    //do it the surgical RIFF RAFF way BD
    let snape = {}
    setInterval(() => {
       snape = gloop(ctx, snape)
    }, 1000 / fps)
 
}

window.onload = init;

const input = { dir: 'up'}
window.addEventListener('keydown', evt => {
    if (evt.key === 'ArrowLeft') {
        input.dir = 'left'
    } else if (evt.key === 'ArrowRight') {
        input.dir = 'right'
    } else if (evt.key === 'ArrowUp') {
        input.dir = 'up'
    } else if (evt.key === 'ArrowDown') {
        input.dir = 'down'
    }});


function render(state) {
    return [{fn: "fillRect", color: snekCuller, args:[0,0,50,50]}];
}

function steppe(stank) {
    return stank;
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
    return snek.map(snegment => {
        return {fn: "fillRect", color: snekCuller, ...snegment}
    })
}

function performDangerousIO(ctx, renderFns) {
    for (let fn of renderFns ) {
        ctx.fillRect = fn.color
        ctx[fn.fn](...fn.args)
    }
}

//snek
//we need to draw a screen
//we need to represent snek state
//we need to handle ipnuts

//we need vim keybindings

