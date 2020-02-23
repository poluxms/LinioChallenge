import { Evaluar } from './Evaluador';

export function GenerarNumeros(inicio: number, fin: number): string[] {
    var result: string[] = [];
    for (var i = inicio; i <= fin; i++) {
        result.push(Evaluar(i));
    }

    return result;
}