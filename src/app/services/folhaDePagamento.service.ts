import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FolhaDePagamento } from "../models/folhaDePagamento";
import { Funcionario } from "./../models/funcionario";

@Injectable({
  providedIn: "root",
})

export class FolhaDePagamentoService {

  private baseURL = "http://localhost:5000/api/folhaDePagamento";

  constructor(private http: HttpClient) {}

  createFolha(folha: FolhaDePagamento): Observable<FolhaDePagamento> {
    return this.http.post<FolhaDePagamento>(`${this.baseURL}/create`, folha);
  }

}