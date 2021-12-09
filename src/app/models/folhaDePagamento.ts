import { Funcionario } from "./funcionario";

export interface FolhaDePagamento {
    id?: number;
    funcionario: Funcionario;
    horas?: number;
    valorHora?: number;
    ano?: number;
    mes?: number;
}