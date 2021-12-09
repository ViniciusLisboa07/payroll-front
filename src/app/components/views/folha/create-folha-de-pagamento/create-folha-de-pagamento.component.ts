import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FolhaDePagamentoService } from 'src/app/services/folhaDePagamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-create-folha',
  templateUrl: './create-folha.component.html',
  styleUrls: ['./create-folha.component.css']
})
export class CreateFolhaDePagamentoComponent implements OnInit {

  funcionario!: Funcionario;
  funcionarios: Funcionario[] = [];

  constructor(
    private serviceFolha: FolhaDePagamentoService,
    private serviceFuncionario: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.serviceFuncionario.listFuncionario().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
      console.log(this.funcionarios)
    })
  }

  createFolha(): void {

  }
}
