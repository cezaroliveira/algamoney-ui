import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DEFAULT_CURRENCY_CODE, ɵDEFAULT_LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective,
    CategoriaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    // FontAwesome
    FontAwesomeModule,

    // PrimeNG
    CalendarModule,
    TableModule,
    TooltipModule,
    NgbModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    SelectButtonModule,

    // Local
    CoreModule,
    LancamentoModule,
    PessoaModule,
  ],
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    {provide: ɵDEFAULT_LOCALE_ID, useValue: 'pt-PT'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    // library.addIcons(faCoffee);
    // Add an package to the library for convenient access in other components
    // library.addIconPacks(fas);
  }
}
