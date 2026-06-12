// Cores da Mona Lisa (paleta histórica)
const CORES = {
    pele: '#DDB892',
    peloEscuro: '#8B6F47',
    olho: '#3D2817',
    branco: '#FFFEF0',
    boca: '#C17A6B',
    fundo: '#7BA428',
    vestido: '#4A3728',
    veu: '#2C2416'
};

let largura = 700;
let altura = 700;

function setup() {
    let container = document.getElementById('sketch-container');
    let sketch = createCanvas(largura, altura);
    sketch.parent(container);
    
    // Responsividade
    if (window.innerWidth < 800) {
        resizeCanvas(400, 400);
        largura = 400;
        altura = 400;
    }
}

function draw() {
    background(CORES.fundo);
    
    // Desenhar fundo estilo Mona Lisa
    desenharFundoMonalisa();
    
    // Desenhar corpo
    desenharCorpo();
    
    // Desenhar rosto
    desenharRosto();
    
    // Desenhar cabelos
    desenharCabelos();
    
    // Desenhar olhos com movimento do mouse
    desenharOlhos();
    
    // Desenhar boca
    desenharBoca();
    
    // Adicionar sombreamento
    aplicarSombreamento();
}

function desenharFundoMonalisa() {
    // Fundo com gradiente estilo Leonardo
    noStroke();
    
    // Céu superior
    fill('#A0A878');
    rect(0, 0, largura, altura * 0.3);
    
    // Paisagem inferior
    fill('#7BA428');
    rect(0, altura * 0.3, largura, altura * 0.7);
    
    // Adicionar algumas linhas de perspectiva
    stroke(100, 100, 80);
    strokeWeight(1);
    line(largura * 0.3, altura * 0.4, largura * 0.5, altura * 0.8);
    line(largura * 0.7, altura * 0.4, largura * 0.5, altura * 0.8);
}

function desenharCorpo() {
    noStroke();
    
    // Vestido
    fill(CORES.vestido);
    quad(
        largura * 0.2, altura * 0.45,
        largura * 0.8, altura * 0.45,
        largura * 0.9, altura,
        largura * 0.1, altura
    );
    
    // Véu/Xale
    fill(CORES.veu);
    arc(largura * 0.5, altura * 0.55, largura * 0.7, altura * 0.3, PI, TWO_PI);
}

function desenharRosto() {
    noStroke();
    
    // Rosto
    fill(CORES.pele);
    ellipse(largura * 0.5, altura * 0.35, largura * 0.35, altura * 0.4);
    
    // Sombra para dar volume
    fill(CORES.pele);
    arc(largura * 0.5, altura * 0.35, largura * 0.35, altura * 0.4, 0, PI);
}

function desenharCabelos() {
    noStroke();
    
    // Cabelos escuros
    fill(CORES.peloEscuro);
    
    // Topo da cabeça
    arc(largura * 0.5, altura * 0.2, largura * 0.38, altura * 0.25, PI, TWO_PI);
    
    // Laterais
    arc(largura * 0.2, altura * 0.35, largura * 0.15, altura * 0.2, 0, PI);
    arc(largura * 0.8, altura * 0.35, largura * 0.15, altura * 0.2, 0, PI);
    
    // Mechas de cabelo
    fill(CORES.peloEscuro);
    arc(largura * 0.35, altura * 0.3, largura * 0.1, altura * 0.15, PI, TWO_PI);
    arc(largura * 0.65, altura * 0.3, largura * 0.1, altura * 0.15, PI, TWO_PI);
}

function desenharOlhos() {
    // Calcular ângulo em relação ao mouse
    let olhoEsquerdo_x = largura * 0.35;
    let olhoEsquerdo_y = altura * 0.32;
    
    let olhoDireito_x = largura * 0.65;
    let olhoDireito_y = altura * 0.32;
    
    let raioOlho = largura * 0.05;
    let raioPupila = largura * 0.02;
    
    // Desenhar olho esquerdo
    desenharOlhoSeguidorMouse(olhoEsquerdo_x, olhoEsquerdo_y, raioOlho, raioPupila);
    
    // Desenhar olho direito
    desenharOlhoSeguidorMouse(olhoDireito_x, olhoDireito_y, raioOlho, raioPupila);
}

function desenharOlhoSeguidorMouse(x, y, raioOlho, raioPupila) {
    noStroke();
    
    // Branco do olho
    fill(CORES.branco);
    circle(x, y, raioOlho * 2);
    
    // Calcular direção do mouse
    let dx = mouseX - x;
    let dy = mouseY - y;
    let distancia = sqrt(dx * dx + dy * dy);
    
    // Normalizar e limitar a distância
    let maxDistancia = raioOlho * 0.6;
    let posicaoPupila_x = x;
    let posicaoPupila_y = y;
    
    if (distancia > 0) {
        posicaoPupila_x = x + (dx / distancia) * maxDistancia;
        posicaoPupila_y = y + (dy / distancia) * maxDistancia;
    }
    
    // Iris
    fill(CORES.olho);
    circle(posicaoPupila_x, posicaoPupila_y, raioPupila * 2.2);
    
    // Pupila
    fill(0);
    circle(posicaoPupila_x, posicaoPupila_y, raioPupila);
    
    // Brilho nos olhos (especularidade)
    fill(255, 255, 255, 180);
    circle(posicaoPupila_x - raioPupila * 0.3, posicaoPupila_y - raioPupila * 0.3, raioPupila * 0.4);
}

function desenharBoca() {
    noFill();
    stroke(CORES.boca);
    strokeWeight(2);
    
    // Boca sutil (o famoso sorriso da Mona Lisa)
    arc(largura * 0.5, altura * 0.42, largura * 0.15, altura * 0.08, 0, PI);
    
    // Linha central dos lábios
    stroke(CORES.boca);
    strokeWeight(1);
    line(largura * 0.42, altura * 0.42, largura * 0.58, altura * 0.42);
}

function aplicarSombreamento() {
    // Adicionar sombreamento subtle para profundidade
    noStroke();
    fill(0, 0, 0, 15);
    
    // Sombra no lado direito do rosto
    arc(largura * 0.65, altura * 0.35, largura * 0.2, altura * 0.3, 0, PI);
}

// Responsividade ao redimensionar a janela
function windowResized() {
    if (window.innerWidth < 800) {
        resizeCanvas(400, 400);
        largura = 400;
        altura = 400;
    } else {
        resizeCanvas(700, 700);
        largura = 700;
        altura = 700;
    }
}

// Mostrar coordenadas do mouse (opcional, para debug)
function mouseMoved() {
    // Isso garante que o desenho seja atualizado quando o mouse se move
    return false;
}