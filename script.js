const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando foi a primeira copa do mundo?",
        alternativas: [
            {
                texto: "13 de julho de 1930",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "15 de maio de 1930",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Qual foi o primeiro time a vencer a copa do mundo?",
        alternativas: [
            {
                texto: "Uruguai",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "França",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Quando foi a primeira copa do mundo vencida pelo brasil?",
        alternativas: [
            {
                texto: "1958",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "1962",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Quantas copa do mundo o brasil tem?",
        alternativas: [
            {
                texto: "5 Copas do mundo",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "6 Copas do mundo.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Qual foi os anos que o brasil foi campeão da copa do mundo? ",
        alternativas: [
            {
                texto: "1958, 1962, 1970, 1994 e 2002.",
                afirmacao: "Estes cinco títulos fazem do Brasil o único país a ter conquistado cinco vezes o torneio, sendo conhecido como o pentacampeão."
            },
            {
                texto: "1958, 1962, 1974, 1982 e 2002",
                afirmacao: "Brail foi reconhecido por ser a seleção com mais copas, sendo pentacampẽao. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal  = "";

function mostraPergunta(){
    if(atual>= perguntas.length){
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
    historiaFinal = afirmacoes +" ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
caixaPerguntas.textContent = "Em 2049";
textoResultado. textContent = historiaFinal;
caixaAlternativas. textContent = "";

}


mostraPergunta();

