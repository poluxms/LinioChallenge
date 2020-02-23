"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Evaluador_1 = require("../src/Evaluador");
const GeneradorNumeros_1 = require("../src/GeneradorNumeros");
const chai_1 = require("chai");
require("mocha");
describe("Evaluador Test multiplos de 3", () => {
    it("Evaluar numero 1 mult 3", () => {
        const result = Evaluador_1.Evaluar(1);
        chai_1.expect(result).to.equal('1');
    });
    it("Evaluar numero 3 mult 3", () => {
        const result = Evaluador_1.Evaluar(3);
        chai_1.expect(result).to.equal('Linio');
    });
    it("Evaluar numero 6 mult 3", () => {
        const result = Evaluador_1.Evaluar(6);
        chai_1.expect(result).to.equal('Linio');
    });
});
describe("Evaluador Test multiplos de 5", () => {
    it("Evaluar numero 1 multiplo 5", () => {
        const result = Evaluador_1.Evaluar(1);
        chai_1.expect(result).to.equal('1');
    });
    it("Evaluar numero 5 multiplo 5", () => {
        const result = Evaluador_1.Evaluar(5);
        chai_1.expect(result).to.equal('IT');
    });
    it("Evaluar numero 10 multiplo 5", () => {
        const result = Evaluador_1.Evaluar(10);
        chai_1.expect(result).to.equal('IT');
    });
});
describe("Evaluador Test multiplos de 5 y 3", () => {
    it("Evaluar numero 15 multiplo 3 y 5", () => {
        const result = Evaluador_1.Evaluar(15);
        chai_1.expect(result).to.equal('Linianos');
    });
    it("Evaluar numero 0 multiplo 3 y 5", () => {
        const result = Evaluador_1.Evaluar(0);
        chai_1.expect(result).to.equal('Linianos');
    });
});
describe("GeneradorNumeros Test", () => {
    it("Generar numeros 1 al 15", () => {
        const result = GeneradorNumeros_1.GenerarNumeros(1, 15);
        chai_1.expect(result[0]).to.equal('1');
        chai_1.expect(result[2]).to.equal('Linio');
        chai_1.expect(result[4]).to.equal('IT');
        chai_1.expect(result[14]).to.equal('Linianos');
        chai_1.expect(result[12]).to.equal('13');
    });
});
//# sourceMappingURL=UnitTest.spec.js.map