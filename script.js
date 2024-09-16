const dados = [
    {
      min: 0,
      max: 18.4,
      classificacao: "Menor que 18,5",
      info: "Magreza",
      obesidade: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classificacao: "Entre 18,5 e 24,9",
      info: "Normal",
      obesidade: "0",
    },
    {
      min: 25,
      max: 29.9,
      classificacao: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesidade: "I",
    },
    {
      min: 30,
      max: 39.9,
      classificacao: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesidade: "II",
    },
    {
      min: 40,
      max: 99,
      classificacao: "Maior que 40,0",
      info: "Obesidade grave",
      obesidade: "III",
    },
];


//Selecionando Elementos

const tabela = document.querySelector("#tabela");

const alturaInput = document.querySelector("#altura");
const pesoInput = document.querySelector("#peso");


const btnCalculo = document.querySelector("#btn-calcular")
const btnLimpa = document.querySelector("#btn-limpar")
const btnVoltar = document.querySelector("#voltar-btn")

const resultado = document.querySelector("#resultado")
const containerCalculo = document.querySelector(".container-calculo")

const resultadoImc = document.querySelector("#resultado-imc span")
const situacao = document.querySelector("#situacao span")

//Funções
function criatabela(dados) {
    
    dados.forEach((item)=>{
        
        //Cria div e adiciona a classe
        const div = document.createElement("div")
        div.classList.add("imc-table")

        //Cria o paragrafo com a classificação e adiciona o texto do array especificado
        const classificacao = document.createElement("p")
        classificacao.innerText = item.classificacao

        //Cria o paragrafo com a Obesidade e adiciona o texto do array especificado
        const info = document.createElement("p")
        info.innerText = item.info

        //Cria o paragrafo com a Informação e adiciona o texto do array especificado
        const obesidade = document.createElement("p")
        obesidade.innerText = item.obesidade

        //Incluindo paragrafos na div 
        div.appendChild(classificacao)
        div.appendChild(info)
        div.appendChild(obesidade)

        tabela.appendChild(div)

    })
}


function limparInput(){
    altura.value = ""
    peso.value = ""
}

function calculaIMC(altura, peso) {
    const imc = peso/altura**2
    return imc.toFixed(1)
}

function esconde(){
    resultado.classList.toggle("inativo")
    containerCalculo.classList.toggle("inativo")
}



//Eventos
criatabela(dados)

btnCalculo.addEventListener("click", (e) =>{
    e.preventDefault();
    esconde();

    const imc = calculaIMC(altura.value, peso.value)
    resultadoImc.innerText = `${imc}`

    let info
    dados.forEach((item) => {
        if (imc >= item.min && imc <= item.max){
            info = item.info
            situacao.innerText = info
        }
        if (!info) return
    })
    
})

btnVoltar.addEventListener("click", () =>{
    limparInput();
    esconde();
})

btnLimpa.addEventListener("click", (e) => {
    e.preventDefault();
    limparInput();
})