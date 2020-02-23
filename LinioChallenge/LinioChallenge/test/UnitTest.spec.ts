import { Evaluar } from '../src/Evaluador';
import { GenerarNumeros } from '../src/GeneradorNumeros';

import { expect } from 'chai';
import 'mocha';

describe("Evaluador Test multiplos de 3", () => {
    it("Evaluar numero 1 mult 3", () => {
        const result = Evaluar(1);
        expect(result).to.equal('1');
    });

    it("Evaluar numero 3 mult 3", () => {
        const result = Evaluar(3);
        expect(result).to.equal('Linio');
    });

    it("Evaluar numero 6 mult 3", () => {
        const result = Evaluar(6);
        expect(result).to.equal('Linio');
    });
});

describe("Evaluador Test multiplos de 5", () => {
    it("Evaluar numero 1 multiplo 5", () => {
        const result = Evaluar(1);
        expect(result).to.equal('1');
    });

    it("Evaluar numero 5 multiplo 5", () => {
        const result = Evaluar(5);
        expect(result).to.equal('IT');
    });

    it("Evaluar numero 10 multiplo 5", () => {
        const result = Evaluar(10);
        expect(result).to.equal('IT');
    });
});

describe("Evaluador Test multiplos de 5 y 3", () => {
    it("Evaluar numero 15 multiplo 3 y 5", () => {
        const result = Evaluar(15);
        expect(result).to.equal('Linianos');
    });

    it("Evaluar numero 0 multiplo 3 y 5", () => {
        const result = Evaluar(0);
        expect(result).to.equal('Linianos');
    });
});

describe("GeneradorNumeros Test", () => {
    it("Generar numeros 1 al 15", () => {
        const result = GenerarNumeros(1, 15);
        expect(result[0]).to.equal('1');
        expect(result[2]).to.equal('Linio');
        expect(result[4]).to.equal('IT');
        expect(result[14]).to.equal('Linianos');
        expect(result[12]).to.equal('13');
    });
});