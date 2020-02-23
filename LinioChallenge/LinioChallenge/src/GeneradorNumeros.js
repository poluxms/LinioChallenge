"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Evaluador_1 = require("./Evaluador");
function GenerarNumeros(inicio, fin) {
    var result = [];
    for (var i = inicio; i <= fin; i++) {
        result.push(Evaluador_1.Evaluar(i));
    }
    return result;
}
exports.GenerarNumeros = GenerarNumeros;
//# sourceMappingURL=GeneradorNumeros.js.map