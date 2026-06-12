# Mona Lisa Interativa - p5.js

Um projeto interativo em p5.js que recria a Mona Lisa de Leonardo da Vinci com uma feature especial: **os olhos acompanham o cursor do mouse**.

## 🎨 Características

✨ **Olhos Interativos** - Os olhos seguem o movimento do seu mouse em tempo real
🎨 **Cores Autênticas** - Paleta de cores baseada na obra original
📱 **Responsivo** - Funciona em dispositivos móveis e desktops
🖼️ **Estilo Leonardo** - Paisagem de fundo estilo renascentista

## 📋 Arquivos do Projeto

- **index.html** - Página principal com estrutura HTML
- **sketch.js** - Código principal em p5.js (lógica e desenho)
- **style.css** - Estilos e layout responsivo
- **README.md** - Este arquivo

## 🚀 Como Usar

### Opção 1: Localmente
1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Mova o mouse para ver os olhos da Mona Lisa acompanharem o cursor!

### Opção 2: Online
1. Faça upload dos arquivos para um servidor web
2. Acesse o arquivo `index.html` via navegador
3. Aproveite a experiência interativa!

## 💻 Tecnologias Utilizadas

- **p5.js** (v1.7.0) - Biblioteca JavaScript para criação visual
- **HTML5** - Estrutura da página
- **CSS3** - Estilos e responsividade
- **JavaScript** - Lógica de programação

## 🎯 Funcionalidades Principais

### Seguimento do Mouse (Tracking)
```javascript
// A função desenharOlhoSeguidorMouse() calcula:
- Distância entre o centro do olho e a posição do mouse
- Ângulo de direção
- Posição da pupila dentro do olho
```

### Paleta de Cores Autêntica
```javascript
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
```

## 🔧 Customização

### Alterar Tamanho
Edite em `sketch.js`:
```javascript
let largura = 700;  // Largura em pixels
let altura = 700;   // Altura em pixels
```

### Mudar Cores
Modifique o objeto `CORES` no início de `sketch.js`

### Ajustar Velocidade de Seguimento
Na função `desenharOlhoSeguidorMouse()`, altere:
```javascript
let maxDistancia = raioOlho * 0.6;  // Aumentar para mais movimento
```

## 📱 Responsividade

O projeto se adapta automaticamente para:
- **Desktop** (700x700px)
- **Tablet** (400x400px)
- **Mobile** (400x400px)

## ✅ Verificação

Para verificar se tudo está funcionando:
1. Os olhos devem aparecer quando você passa o mouse
2. As pupilas devem seguir a posição do seu cursor
3. Deve haver um brilho nos olhos (especularidade)
4. O fundo deve ter cores naturais

## 🎓 Conceitos Aprendidos

- Manipulação de formas com p5.js
- Detecção de posição do mouse
- Cálculos geométricos (atan2, distância euclidiana)
- Responsividade CSS
- Uso de cores e sombras

## 📚 Recursos Adicionais

- [Documentação p5.js](https://p5js.org/reference/)
- [Sobre a Mona Lisa](https://en.wikipedia.org/wiki/Mona_Lisa)
- [Tutorial p5.js em Português](https://p5js.org/pt-br/learn/)

## 🤝 Contribuições

Sinta-se livre para:
- Melhorar a aparência do desenho
- Adicionar mais interatividade
- Corrigir bugs
- Sugerir novas features

## 📝 Licença

Este projeto é educacional e criado como exercício de aprendizado com p5.js.

---

**Créditos**: Inspirado na obra de Leonardo da Vinci e desenvolvido com p5.js 🎨