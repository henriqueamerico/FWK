const canvas = document.getElementById("meuCanvas");
canvas.height = window.innerHeight - 50;
canvas.width = window.innerWidth - 50;
const label = document.getElementById("distancia");
const ctx = canvas.getContext("2d");

let alvoX = circulo.x;
let alvoY = circulo.y;
const velocidade = 5;
let circulo = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: 50,
    desenhar: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
};

let circulo1 = {
    x: 100,
    y: 100,
    r: 50,
    desenhar: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }
};
canvas.addEventListener("mousedown", function (ev) {
    const rect = canvas.getBoundingClientRect();
    alvoX = ev.clientX - rect.left;
    alvoY = ev.clientY - rect.top;
    mover();

});

function mover() {
    let dx = alvoX - circulo.x;
    let dy = alvoY - circulo.y;
    let distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia > velocidade) {
        circulo.x += (dx / distancia) * velocidade;
        circulo.y += (dy / distancia) * velocidade;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        atualizar();
        requestAnimationFrame(mover);
    }
    else {
        circulo.x = alvoX;
        circulo.y = alvoY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        atualizar();
    }
}
function atualizar() {
    let raios = circulo.r + circulo1.r;
    let dist = (circulo.x-circulo1.x + circulo.y-circulo1.y) - raios;   
    label.innerHTML = "Distancia: " + dist;
    circulo.desenhar();
    if(dist < 0)
    circulo1.desenhar();
}
circulo.desenhar();
circulo1.desenhar();
