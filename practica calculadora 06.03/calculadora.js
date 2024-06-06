let resultadoAnterior = null;

function calcular(operation) {
    let v1 = parseFloat(document.getElementById('v1').value);
    let v2 = parseFloat(document.getElementById('v2').value);
    let resultado;

    if (resultadoAnterior !== null) {
        v1 = resultadoAnterior;
    }

    switch (operation) {
        case 'suma':
            resultado = v1 + v2;
            break;
        case 'resta':
            resultado = v1 - v2;
            break;
        case 'multiplicacion':
            resultado = v1 * v2;
            break;
        case 'division':
            if (v2 === 0) {
                document.getElementById('res').innerText = "Error: División por 0";
                return;
            }
            resultado = v1 / v2;
            break;
        default:
            return;
    }

    resultadoAnterior = resultado;
    document.getElementById('res').innerText = resultado;
}