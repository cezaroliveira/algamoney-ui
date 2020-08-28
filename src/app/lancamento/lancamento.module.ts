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

import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentoPesquisaComponent,
    LancamentoGridComponent
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
    LancamentoCadastroComponent,
    LancamentoPesquisaComponent
  ]
})
export class LancamentoModule { }
