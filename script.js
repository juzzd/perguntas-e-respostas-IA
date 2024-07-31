const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você geralmente se sente ao conhecer novas pessoas?",
        alternativas: [
            {
                texto: " Animado(a) e curioso(a)",
                afirmacao: "Que sempre está aberto a novas amizades e sempre animado(a)"
            },
            {
                texto: " Cauteloso(a) e reservado(a)",
                afirmacao: "Muito cauteloso(a) em relação a amizades e observador"
            }
        ]
    },
    {
        enunciado: "Em situações de decisão, você prefere:",
        alternativas: [
            {
                texto: "Seguir seu instinto e intuição",
                afirmacao: "que segue seu coração"
            },
            {
                texto: "Analisar cuidadosamente as opções disponíveis",
                afirmacao: "que sempre pensa no futuro cuidadosamente"
            }
        ]
    },
    {
        enunciado: "Quando confrontado(a) com um problema difícil, você tende a:",
        alternativas: [
            {
                texto: "Buscar conselhos de outras pessoas",
                afirmacao: "e sempre está aberto a opiniões de pessoas proximas,"
            },
            {
                texto: " Resolver sozinho(a), confiando em sua própria capacidade",
                afirmacao: "sempre muito confiante em sua capacidade,"
            }
        ]
    },
    {
        enunciado: "Qual dessas descrições melhor se encaixa na sua abordagem em relação a mudanças na vida?",
        alternativas: [
            {
                texto: "Gosto de experimentar coisas novas e me adaptar facilmente",
                afirmacao: "aberto a novas experiencias"
            },
            {
                texto: " Prefiro a estabilidade e rotina conhecida",
                afirmacao: "gosta de ter uma vida estavel e tranquila"
            }
        ]
    },
    {
        enunciado: "Em um ambiente de trabalho ou estudo, você se considera mais:",
        alternativas: [
            {
                texto: "Colaborativo(a) e voltado(a) para o trabalho em equipe",
                afirmacao: "e sempre copera bem em equipe."
            },
            {
                texto: "Independente e eficiente trabalhando sozinho(a)",
                afirmacao: "e sempre realiza muito bem seus trabalhos sozinho(a)."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
