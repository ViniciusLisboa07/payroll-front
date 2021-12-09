import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
