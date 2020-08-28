import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';

import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent,
    PessoaGridComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    FormsModule,
    // FontAwesomeModule,
    // NgbModule,

    // PrimeNG
    CalendarModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    SelectButtonModule,

    // Local
    SharedModule
  ],
  exports: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ]
})
export class PessoaModule { }
