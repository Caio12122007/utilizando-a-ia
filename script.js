const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando alguém está sofrendo de ansiedade intensa, qual é uma forma saudável de lidar com a situação?.",
        alternativas: [
            {
                texto:  "Procurar um psicólogo ou praticar técnicas de respiração!",
                afirmacao: "Quando uma pessoa procura um psicólogo ela esta buscando compreender melhor o que sente. "
            },
            {
                texto: "Guardar tudo para si e evitar falar sobre o problema!",
                afirmacao: "Deixar para que voce mesmo resolva os problemas sozinho(a) ."
            }
        ]
    },
    {
        enunciado: "O que deve ser feito quando uma pessoa apresenta sintomas de depressão por muito tempo?",
        alternativas: [
            {
                texto: "Buscar ajuda profissional com psicólogo ou psiquiatra.",
                afirmacao: "Buscar ajuda dá um passo fundamental para cuidar da propia saude.",
            },
            {
                texto: "Acreditar que é apenas “frescura” e esperar passar sozinho.",
                afirmacao: "A depressão é frescura e passa sozinho basta ter um pouco de força",
            }
        ]
    },
    {
        enunciado: "Qual é uma prática eficaz para cuidar da saúde mental no dia a dia?",
        alternativas: [
            {
                texto: "Ter momentos de lazer, sono adequado e praticar atividade física.",
                afirmacao: "Quando a pessoa tem esse tempo de descanso esta fazendo o mais correto para sua saude.",
            },
            {
                texto: "Trabalhar sem descanso e ignorar sinais de estresse.",
                afirmacao: "Trabalhar sem parar e ignorar o estresse é normal e não fa mal, quem aguenta mais é mais forte.",
            }
        ]
    },
    {
        enunciado: "Se alguém sofre com fobia específica (como medo de altura), qual abordagem é mais indicada?",
        alternativas: [
            {
                texto: "Fazer terapia de exposição gradual e acompanhamento psicológico",
                afirmacao: "Ajuda a pessoa a retornar atividades normais e ter mais qualidade de vida.",
            },
            {
                texto: "Evitar qualquer contato com o medo para sempre, sem buscar ajuda.",
                afirmacao: "Eitar completamente o que causa medo é a melhor forma de superar fobia!",
            }
        ]
    },
    {
        enunciado: "Quando uma pessoa enfrenta dificuldades emocionais sérias, qual atitude é recomendada?",
        alternativas: [
            {
                texto: " Conversar com familiares ou amigos e buscar apoio profissional.",
                afirmacao: "Fazer isso ajuda a fortalecer os sentimentos da pessoa e aumenta a chance de recuperação.",
            },
            {
                texto: "Se isolar completamente e não falar com ninguém.",
                afirmacao: "É melhor enfrentar tudo sozinho , falar com alguém que so mostra fraquea e não precisa de ajuda. ",
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
    caixaPerguntas.textContent = "Busque ajuda...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();