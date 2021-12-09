import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-create-funcionario',
  templateUrl: './create-funcionario.component.html',
  styleUrls: ['./create-funcionario.component.css']
})
export class CreateFuncionarioComponent implements OnInit {
  nome!: string;
  funcao!: string;

  constructor(
    private service: FuncionarioService
  ) { }

  ngOnInit(): void {
  }

  createFuncionario(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      funcao: this.funcao
    }

    this.service.createFuncionario(funcionario).subscribe((funcionario) => {
      console.log(funcionario)
    })
  }
}
