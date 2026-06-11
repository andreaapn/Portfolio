// ===== Animação das barras de habilidade =====
// Anima o preenchimento das barras quando elas entram na viewport.
document.addEventListener('DOMContentLoaded', () => {
    const barras = document.querySelectorAll('.preenchimento');

    if (barras.length > 0 && 'IntersectionObserver' in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    const barra = entrada.target;
                    const larguraFinal = barra.style.width;
                    barra.style.width = '0';
                    requestAnimationFrame(() => {
                        barra.style.width = larguraFinal;
                    });
                    observador.unobserve(barra);
                }
            });
        }, { threshold: 0.4 });

        barras.forEach((barra) => observador.observe(barra));
    }

    // Saudação dinâmica baseada na hora do dia.
    const saudacaoElemento = document.querySelector('.saudacao');
    if (saudacaoElemento && saudacaoElemento.textContent.includes('Olá')) {
        const hora = new Date().getHours();
        let textoSaudacao = 'Olá, eu sou';
        if (hora < 12) {
            textoSaudacao = 'Bom dia, eu sou';
        } else if (hora < 18) {
            textoSaudacao = 'Boa tarde, eu sou';
        } else {
            textoSaudacao = 'Boa noite, eu sou';
        }
        saudacaoElemento.textContent = textoSaudacao;
    }
});

// ===== Sketch p5.js =====
// Sistema de partículas conectadas que reage ao mouse.
// Só executa se o p5 estiver carregado e o container existir.
if (typeof p5 !== 'undefined' && document.getElementById('sketch-holder')) {

    const sketch = (p) => {
        let particulas = [];
        const totalParticulas = 35;
        const distanciaConexao = 90;

        class Particula {
            constructor() {
                this.x = p.random(p.width);
                this.y = p.random(p.height);
                this.vx = p.random(-0.6, 0.6);
                this.vy = p.random(-0.6, 0.6);
                this.raio = p.random(2, 4);
            }

            atualizar() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > p.width) this.vx *= -1;
                if (this.y < 0 || this.y > p.height) this.vy *= -1;

                // Atração suave em direção ao mouse.
                const dxMouse = p.mouseX - this.x;
                const dyMouse = p.mouseY - this.y;
                const distMouse = p.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                if (distMouse < 120 && distMouse > 0) {
                    this.vx += (dxMouse / distMouse) * 0.04;
                    this.vy += (dyMouse / distMouse) * 0.04;
                }

                // Limita velocidade para o sistema não explodir.
                this.vx = p.constrain(this.vx, -1.5, 1.5);
                this.vy = p.constrain(this.vy, -1.5, 1.5);
            }

            desenhar() {
                p.noStroke();
                p.fill(157, 133, 255, 220);
                p.circle(this.x, this.y, this.raio * 2);
            }
        }

        p.setup = () => {
            const container = document.getElementById('sketch-holder');
            const tamanho = container.offsetWidth;
            const canvas = p.createCanvas(tamanho, tamanho);
            canvas.parent('sketch-holder');
            for (let i = 0; i < totalParticulas; i++) {
                particulas.push(new Particula());
            }
        };

        p.draw = () => {
            p.background(26, 29, 39);

            for (let i = 0; i < particulas.length; i++) {
                particulas[i].atualizar();
                particulas[i].desenhar();

                for (let j = i + 1; j < particulas.length; j++) {
                    const dx = particulas[i].x - particulas[j].x;
                    const dy = particulas[i].y - particulas[j].y;
                    const dist = p.sqrt(dx * dx + dy * dy);
                    if (dist < distanciaConexao) {
                        const alpha = p.map(dist, 0, distanciaConexao, 180, 0);
                        p.stroke(76, 214, 193, alpha);
                        p.strokeWeight(0.7);
                        p.line(particulas[i].x, particulas[i].y, particulas[j].x, particulas[j].y);
                    }
                }
            }
        };

        p.windowResized = () => {
            const container = document.getElementById('sketch-holder');
            if (container) {
                const tamanho = container.offsetWidth;
                p.resizeCanvas(tamanho, tamanho);
            }
        };
    };

    new p5(sketch);
}
