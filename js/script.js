
let tentativasTotais = 6;
let listaDinamica = [];
let erros = [];
let palavraSecretaCategoria;
let palavraSecreta;
let listaPalavras = []
let iniciar = false;


const bdPalavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];

function start() {
    if(listaPalavras.length > 0){
        for(var i = 0; i < listaPalavras.length; i++){
            document.getElementById("tecla-" + listaPalavras[i]).disabled = false;
            document.getElementById("tecla-" + listaPalavras[i]).style.background = 'rgb(245, 243, 241)';
            document.getElementById("tecla-" + listaPalavras[i]).style.color  ='palevioletred';
        }
        listaPalavras = []
    }
    document.getElementById('palavra-secreta').innerHTML = "";
    document.getElementById('letrasErradas').innerHTML = "<div>Erros: </div>";
    listaDinamica = [];
    tentativasTotais = 6;
    criarPalavra();
    exibirPalavra();
    imagemForca();
    iniciar = true;
}

function criarPalavra() {
    const indexPalavra = parseInt(Math.random() * bdPalavras.length);
    palavraSecreta = bdPalavras[indexPalavra].nome;
    palavraSecretaCategoria = bdPalavras[indexPalavra].categoria;
}

function exibirPalavra() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML =  "Dica: " + palavraSecretaCategoria;
    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecreta.length; i++) {
        if ((listaDinamica[i] == undefined)) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function exibirPalavrasErradas(letra){
    const palavraTelaErrada = document.getElementById('letrasErradas');
    var div = document.createElement('div');
    div.classList = 'erradas'
    div.textContent = letra;
    palavraTelaErrada.appendChild(div);
}

function verificaLetraEscolhida(letra) {
    if (iniciar == true){
        document.getElementById("tecla-" + letra).disabled = true;
        listaPalavras.push(letra);
        if (tentativasTotais > 0) {
                estiloLetra("tecla-" + letra)
                if(comparaListas(letra) == 1){
                    exibirPalavra();
                }
                else{
                    exibirPalavrasErradas(letra);
                }
        }
    }else {
        alert("Inicie o jogo!")
    }
}

function estiloLetra(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra) {
    const pos = palavraSecreta.indexOf(letra)
    if (pos < 0) {
        tentativasTotais--
        imagemForca();

        if (tentativasTotais == 0) {
            abreModal("ERRROUU!", "A palavra era <br>" + palavraSecreta);
        }
        return 0;
    }
    else {
        for (i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
        let vitoria = true;
        for (i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] != listaDinamica[i]) {
                vitoria = false;
            }
        }
        if (vitoria == true) {
            abreModal("BOAAAA!!", "Parabens voce conseguiu acertar!!");
            tentativasTotais = 0;
        }
        return 1;
    }
}

function imagemForca() {
    var tentativasRestantes = document.getElementById('tentativasRestantes');
    tentativasRestantes.innerHTML = tentativasTotais;
    tentativasRestantes.innerHTML = "<div id='tentativasRestantes'>" + 'Tentativas restantes: ' + tentativasTotais + "</div>"
    switch (tentativasTotais) {
        case 5:
            document.getElementById("imagem").style.background = "url('./images/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./images/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./images/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./images/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./images/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./images/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./images/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel")
    modalTitulo.innerText = titulo;
    let modalbody = document.getElementById("modalBody")
    modalbody.innerHTML = mensagem;
    $("#myModal").modal({
        show: true
    });
}