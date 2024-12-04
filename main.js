let canv = document.getElementById('canvas');
let ctx = canv.getContext('2d');

let isMouseDown = false;
let color = 'orange';
let lineWidth = 20;
let cords = [];

canv.width = window.innerWidth;
canv.height = window.innerHeight;

canv.fillStyle = 'red';


canv.addEventListener('mousedown', function (e) {
    isMouseDown = true;
});

canv.addEventListener('mouseup', function (e) {
    isMouseDown = false;
    ctx.beginPath();
    cords.push('mouseup');
})

ctx.lineWidth = lineWidth * 2;
ctx.strokeStyle = color;
ctx.fillStyle = color;

canv.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        cords.push([e.clientX, e.clientY]);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, lineWidth, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
})


canv.addEventListener('mousedown', function (e) {
    if (isMouseDown) {
        cords.push([e.clientX, e.clientY]);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, lineWidth, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }
})

penSize.oninput = function () {
    lineWidth = this.value;
    ctx.lineWidth = lineWidth * 2;
}


penColor.oninput = function () {
    color = this.value;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


function clear() {
    ctx.clearRect(0, 0, canv.width, canv.height);
    cords = [];

}

document.body.addEventListener('keydown', function (e) {
    if (e.key == 'c') {
        clear();
    }
})




controlBtn.addEventListener('click', function () {
    const controls = document.querySelector('.controlls');
    if (controls.style.marginRight === '-305px') {
        controls.style.marginRight = '0';
        controlBtn.style.marginRight = '305px';
    } else {
        controls.style.marginRight = '-305px';
        controlBtn.style.marginRight = '0';

    }
})

let isEraser = false;

eraserBtn.addEventListener('click', function () {
    isEraser = !isEraser;
    if (isEraser) {
        ctx.strokeStyle = 'white'; 
        ctx.fillStyle = 'white';
    } else {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    }
});

eraserSize.oninput = function () {
    lineWidth = this.value;
    ctx.lineWidth = lineWidth * 2;
};

MusicBtn.addEventListener('click', function () {
    const audio = new Audio();
    audio.src = 'music/den.mp3';
    audio.play();
});
