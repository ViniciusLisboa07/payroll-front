import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateFolhaDePagamentoComponent } from "./components/views/folha/create-folha-de-pagamento/create-folha-de-pagamento.component";
import { CreateFuncionarioComponent } from "./components/views/funcionario/create-funcionario/create-funcionario.component";


const routes: Routes = [
    {
        path: "",
        component: CreateFuncionarioComponent,
    },
    {
        path: "folha",
        component: CreateFolhaDePagamentoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
