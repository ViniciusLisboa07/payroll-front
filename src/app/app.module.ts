import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { CreateFuncionarioComponent } from './components/views/funcionario/create-funcionario/create-funcionario.component';
import { TemplateComponent } from './components/template/template.component';
import { CreateFolhaDePagamentoComponent } from './components/views/folha/create-folha-de-pagamento/create-folha-de-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFuncionarioComponent,
    TemplateComponent,
    CreateFolhaDePagamentoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
