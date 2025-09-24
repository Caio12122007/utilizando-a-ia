const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando foi a primeira copa do mundo?.",
        alternativas: [
            {
                texto: "13 de julho de 1930!",
                afirmacao: "A primeira Copa do Mundo ocorreu no Uruguai. "
            },
            {
                texto: "15 de maio de 1930!",
                afirmacao: "A primeira Copa do Mundo ocorreu na França."
            }
        ]
    },
    {
        enunciado: "Quantas copas do mundo o brasil tem?",
        alternativas: [
            {
                texto: "Brasil tem 5 copas.",
                afirmacao: "O Brasil tem cinco títulos da Copa do Mundo da FIFA."
            },
            {
                texto: "Brasil tem 6 copas.",
                afirmacao: "O Brasil tem seis títulos da Copa do Mundo da FIFA"
            }
        ]
    },
    {
        enunciado: "Quando o Brasil ganhou a primeira copa do mundo?",
        alternativas: [
            {
                texto: "1958",
                afirmacao: "O Brasil ganhou a sua primeira Copa do Mundo em 1958, na Suécia."
            },
            {
                texto: "1974.",
                afirmacao: " O Brasil ganhou a sua primeira Copa do Mundo em 1974, na Suécia."
            }
        ]
    },
    {
        enunciado: "Qual foi os anos que o brasil foi campeão da copa do mundo?",
        alternativas: [
            {
                texto: "O Brasil foi campeão da Copa do Mundo da FIFA nos anos de 1958, 1962, 1970, 1994 e 2002",
                afirmacao: "O Brasil é a única seleção na história a conquistar cinco títulos mundiais."
            },
            {
                texto: "O Brasil foi campeão da Copa do Mundo da FIFA nos anos de 1958, 1962, 1974, 1994, 2002, 2006.",
                afirmacao: "O Brasil é a única seleção na história a conquistar seis títulos mundiais!"
            }
        ]
    },
    {
        enunciado: "Quem foi o artilheiro da última copa do mundo?",
        alternativas: [
            {
                texto: " Kylian Mbappé.",
                afirmacao: "A corrida pela Chuteira de Ouro, prêmio dado pela Fifa ao artilheiro da Copa do Mundo do Catar, com Kylian Mbappé no topo."
            },
            {
                texto: "Cristiano Ronaldo.",
                afirmacao: "A corrida pela Chuteira de Ouro, prêmio dado pela Fifa ao artilheiro da Copa do Mundo do Catar, com Cristiano Ronaldo no topo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2002...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();

