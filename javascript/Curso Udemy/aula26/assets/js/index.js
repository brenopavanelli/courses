function main() {
    const formulario = document.querySelector("#formulario");
    const resultado = document.querySelector("#resultado");

    formulario.addEventListener('submit', function submitFormulario(evento) { 
        evento.preventDefault(); // previne o envio do formulario

        // coleta os dados
        const peso = formulario.querySelector("#peso");
        const altura = formulario.querySelector("#altura");
        
        let imc = calcularImc(peso, altura);
        let lvl = identificarNivel(imc);

    });

    const calcularImc = (peso, altura) => peso.value / (altura.value * altura.value); 

    function identificarNivel(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[4];
        if (imc >= 29.9) return nivel[5];
        if (imc >= 34.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];

    }

    function apresentarResultados(msg) { resultado.innerHTML = msg; }

    
    
}

main();