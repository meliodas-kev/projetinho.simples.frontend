const visor = document.getElementById("visor");

// Adiciona um valor ao visor
function adicionar(valor) {
    visor.value += valor;
}

// Limpa o visor
function limpar() {
    visor.value = "";
}

// Realiza o cálculo
function calcular() {
    try {
        if (visor.value.trim() === "") {
            return;
        }

        const resultado = eval(visor.value);

        visor.value = resultado;
    } catch (erro) {
        visor.value = "Erro";
    }
}
