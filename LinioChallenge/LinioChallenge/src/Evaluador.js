"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Evaluar(numero) {
    if (numero % 3 == 0 && numero % 5 == 0)
        return 'Linianos';
    else if (numero % 3 == 0)
        return 'Linio';
    else if (numero % 5 == 0)
        return 'IT';
    return numero.toString();
}
exports.Evaluar = Evaluar;
//# sourceMappingURL=Evaluador.js.map