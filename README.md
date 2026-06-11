# Portfólio — Andre Augusto

Portfólio pessoal estático construído com **HTML5**, **CSS3** e **JavaScript** puro, com uma camada de animação criativa em **p5.js**. O site apresenta a trajetória de **Andre Augusto**, estudante do primeiro período de **Ciência da Computação na CESAR School**, com interesse em **cibersegurança** e desenvolvimento web.

A página de projetos detalha os dois trabalhos acadêmicos do primeiro período:

- **Projeto 1 — Ver Além do Jogo**: jogo de mesa acessível para pessoas com cegueira parcial, com eletrônica em **Arduino** programada em **C/C++**.
- **Projeto 2 — HYROX Planner**: aplicação CLI em **Python** com **CRUD completo** (requisito da cadeira), gestão de performance, calculadora de IMC, planejador de competições, relatório de progresso e agente de IA via **Groq / Llama 3.3**.

A página inicial inclui também o certificado do curso **JavaScript Essentials 1**, concluído em maio de 2026 pela **Cisco Networking Academy**, em parceria com a CESAR School.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Estrutura de arquivos](#estrutura-de-arquivos)
- [Como executar](#como-executar)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Sobre os projetos](#sobre-os-projetos)
- [Links externos](#links-externos)
- [Requisitos atendidos](#requisitos-atendidos)
- [Validação de marcação](#validação-de-marcação)

---

## Visão Geral

O portfólio possui duas páginas:

1. **`index.html`** — Apresentação, sobre, interesses profissionais (cibersegurança, web, acessibilidade), habilidades, **certificação Cisco**, materiais de estudo e contato.
2. **`projetos.html`** — Detalhamento dos dois projetos acadêmicos, com índice no topo para navegação rápida.

A navegação entre as páginas está disponível no cabeçalho fixo de ambas. O design é responsivo e usa **Grid** e **Flexbox** combinados.

## Estrutura de arquivos

```
Portifolio/
├── index.html          # Página inicial
├── projetos.html       # Página com os dois projetos
├── style.css           # Estilos (Grid + Flexbox)
├── script.js           # JS do site + animação p5.js
├── README.md           # Este arquivo
└── imagens/
    ├── jogo-acessibilidade.png      # Protótipo final do Projeto 1
    ├── jogo-prototipo-papelao.png   # Protótipo de baixa fidelidade
    ├── jogo-3d-topo.png             # Modelo 3D — vista superior
    ├── jogo-3d-pecas.png            # Modelo 3D — peças coloridas
    ├── jogo-3d-lateral.png          # Modelo 3D — vista lateral
    └── certificado-cisco-js.png     # Certificado JavaScript Essentials 1
```

## Como executar

Por ser um site estático, basta abrir o arquivo `index.html` em qualquer navegador moderno. Para servir via servidor local (recomendado para evitar restrições de CORS no carregamento de fontes e imagens):

```bash
# Usando Python 3
python3 -m http.server 8000

# Ou usando Node.js (npx)
npx serve .
```

Em seguida, acesse `http://localhost:8000` no navegador.

## Tecnologias utilizadas

| Categoria         | Recurso                                            |
|-------------------|----------------------------------------------------|
| Marcação          | HTML5 com tags semânticas                          |
| Estilos           | CSS3 com Grid, Flexbox e variáveis CSS             |
| Interatividade    | JavaScript (ES6+)                                  |
| Visual criativo   | [p5.js](https://p5js.org/) — sistema de partículas |
| Tipografia        | Google Fonts (Inter)                               |

## Sobre os projetos

### Projeto 1 — Ver Além do Jogo

> *A acessibilidade nos jogos é fundamental para garantir que pessoas com diferentes habilidades possam jogar de forma inclusiva. Muitos jogos ainda são desenvolvidos com foco excessivo na experiência visual, o que pode limitar o acesso e o entretenimento de pessoas com deficiência visual.*

**Selecionado para a Mostra Tech Design da CESAR School.** Jogo de mesa físico para pessoas com **cegueira parcial**, desenvolvido por equipe **multidisciplinar** (Ciência da Computação + Design) usando **metodologias ágeis** com **Jira**, kickoff, backlog e reuniões semanais. Recursos:

- Formas geométricas em **alto-relevo** (pentágono, círculo, cruz, triângulo).
- **Cores de alto contraste** sobre base branca.
- **Setas direcionais** apontando para o centro do tabuleiro.
- **Disposição simétrica** para facilitar a memorização das posições.
- **Áudio integrado** com instruções dubladas e alto-falantes embutidos.
- Eletrônica em **Arduino**, programada em **C/C++**.

A página `projetos.html` mostra a evolução do protótipo desde o **modelo em papelão** (kickoff), passando por **modelagem 3D** e **Figma**, até a versão funcional final.

Imagens disponíveis em `imagens/`:

- `jogo-acessibilidade.png` — protótipo final em madeira.
- `jogo-prototipo-papelao.png` — protótipo de baixa fidelidade.
- `jogo-3d-topo.png`, `jogo-3d-pecas.png`, `jogo-3d-lateral.png` — modelos 3D.

### Projeto 2 — HYROX Planner

Aplicação de linha de comando em **Python** que atende ao **requisito de CRUD** da cadeira de Fundamentos de Programação. O domínio é o esporte HYROX (corrida + estações de força), e o sistema permite:

- **Create / Read / Update / Delete** de planos de treino, com persistência em `data.json`.
- Registro detalhado de **performance** (tempo, distância, peso, repetições).
- **Relatório de progresso** global e por plano, com cálculo de tendências (▲ ▼ =).
- **Calculadora de IMC** com classificação (de *Underweight* a *Morbidly Obese*).
- **Planejador de competições** com contagem regressiva.
- **Agente de IA** (via Groq API + `llama-3.3-70b-versatile`) que analisa cada plano e responde perguntas sobre ele.
- Interface CLI colorida com códigos ANSI e validação de entradas.

Arquitetura modular: `main.py`, `crud.py`, `progress.py`, `agente.py`, `calc.py`, `compet.py`, `misc.py`.

## Links externos

- **Site oficial do Projeto 1:** <https://sites.google.com/cesar.school/projeto1-ver-alem-do-jogo/home>
- **Repositório do Projeto 2 (Hyrox):** <https://github.com/gum-gummii/cesar_dressing/tree/main/python/goddamn%20hyrox>
- **GitHub do Andre:** <https://github.com/combxtz>
- **LinkedIn:** <https://www.linkedin.com/in/andr%C3%A9-augusto-de-ara%C3%BAjo/>

## Requisitos atendidos

- ✅ Construído com **HTML, CSS e JS** puros.
- ✅ **Layout em Flexbox e Grid** combinados.
- ✅ **Diversidade de componentes**: cabeçalho fixo, navegação, hero, seções, cards, lista de habilidades com barras de progresso, certificado, callout, sidebar com `<dl>`, figura com legenda, índice de projetos, rodapé.
- ✅ **Tags semânticas** corretas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<address>`, `<figure>`, `<figcaption>`, `<dl>`/`<dt>`/`<dd>`.
- ✅ **Navegação simples** entre as duas páginas, com índice interno de projetos.
- ✅ **Pelo menos duas páginas HTML** (`index.html` e `projetos.html`).
- ✅ **Recurso em JavaScript**:
  - Animação de barras de habilidade ao entrar na viewport (`IntersectionObserver`).
  - Saudação dinâmica de acordo com a hora do dia.
  - **p5.js**: sistema de partículas conectadas que reage ao mouse.
- ✅ **Marcação válida** segundo o W3C Markup Validation Service.
- ✅ **README** presente.
- ✅ **Tudo em português**.
- ✅ **Conteúdo**: interesses profissionais, descrição dos artefatos dos projetos e lista de links de estudo.

## Validação de marcação

Para validar o HTML:

1. Acesse: <https://validator.w3.org/>
2. Use a aba **Validate by File Upload** e envie `index.html` e `projetos.html`.
3. Resultado esperado: *Document checking completed. No errors or warnings to show*.

Os arquivos foram escritos seguindo as recomendações do HTML5:

- Doctype declarado.
- Atributo `lang="pt-BR"` no `<html>`.
- Meta `charset` e `viewport`.
- Entidades HTML corretas (`&amp;`, `&lt;`, `&gt;`, `&copy;`).
- Atributo `alt` descritivo nas imagens.
- Atributos ARIA apropriados em elementos interativos.

---

Construído com cuidado para fins acadêmicos · CESAR School.
