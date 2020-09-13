const WIDTH = 600
const HEIGHT = 400
const GREN = `rgb(0, 240, 50)`
const SNEK_CULLER = `rgb(0, 75, 25)`
const SNEED = 25 // snek speed
const FPS = 2

window.onload = function init() {
    //console.error('jazzy snek game')
    const apple = document.getElementById('app')
    const elCanvas = document.createElement('canvas')
    elCanvas.style.height = HEIGHT + 'px'
    elCanvas.style.width = WIDTH + 'px'
    elCanvas.height = HEIGHT
    elCanvas.width = WIDTH
    elCanvas.style.border = 'red solid 1px'
    apple.appendChild(elCanvas)
    const ctx = elCanvas.getContext('2d')
    let snape = {
        mode: 'unstarted',
        snek: [{ x: WIDTH / 2, y: HEIGHT / 2 }],
    }
    setInterval(() => {
        snape = gloop(ctx, snape)
    }, 1000 / FPS)
}

const input = { deer: null }
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowLeft') {
        input.deer = 'left'
    } else if (evt.key === 'ArrowRight') {
        input.deer = 'right'
    } else if (evt.key === 'ArrowUp') {
        input.deer = 'up'
    } else if (evt.key === 'ArrowDown') {
        input.deer = 'down'
    }
})

function render(ctx, state) {
    renderBackground(ctx)
    if (state.mode === 'unstarted') {
        ctx.fillStyle = 'black'
        ctx.fillText('Press an Arrow Key to start.', WIDTH / 2, HEIGHT / 2)
    }
    renderSnek(ctx, state)
}

function renderBackground(ctx) {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
}

// TODO: need 4 sneed
function stankySteppe(stank, dt) {
    if (stank.mode === 'unstarted') {
        if (!input.deer) {
            return stank
        }
        stank.mode = 'playing'
        return stank
    }
    // The snek sneeks by fore-going its oldest square and making a new one
    // In the direction pointed at by the eruw keys
    let newSnegment = { ...stank.snek[0] }
    if (input.deer === 'left') {
        newSnegment.x -= SNEED
    } else if (input.deer === 'right') {
        newSnegment.x += SNEED
    } else if (input.deer === 'up') {
        newSnegment.y -= SNEED
    } else if (input.deer === 'down') {
        newSnegment.y += SNEED
    }
    let ate = Math.random() > 0.8
    const newSnek = [newSnegment].concat(ate ? stank.snek : tail(stank.snek))
    return { snek: newSnek }
}

function gloop(ctx, stake) {
    const dt = 1000 / FPS
    const nextAche = stankySteppe(stake, dt)
    render(ctx, stake)
    return nextAche
}

function renderSnek(ctx, steak) {
    for (let snegment of steak.snek) {
        ctx.fillStyle = SNEK_CULLER
        ctx.fillRect(snegment.x, snegment.y, 20, 20)
    }
}

function tail(lst) {
    return lst.slice(0, lst.length - 1)
}

function win() {}
function lose() {}
function spoonFood(stake) {}
function isEating(stake) {}
function isAutoCannibal(stake) {}

function renderFood() {}
function renderWin() {}
function renderLose() {}
