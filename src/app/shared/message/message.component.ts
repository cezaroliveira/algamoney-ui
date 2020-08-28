import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

// import { isRequired, checkRequired } from '../requiredInput';
// import { Required } from '../requiredInput2';

@Component({
  selector: 'app-message',
  template: `
    <small class="p-invalid" *ngIf="hasError()">{{ textMessageError }}</small>
  `,
  styles: [``],
})
export class MessageComponent implements OnInit, OnChanges {
  /** Exemplo de uso: [control]="descricao", sendo descricao a variável que referencia o input com os validators. */
  @Input()
  // @isRequired
  // @Required
  control: FormControl;

  /** Exemplo de uso: [validators]="{required: 'Teste required', minlength: 'Teste minlength'}" */
  @Input()
  // @isRequired
  // @Required
  validators: any;

  textMessageError: string;

  /**
   * Armazena os campos obrigatórios para que seja realizada a validação ao utilizar o componente.
   */
  private requiredFields = [this.control, this.validators];

  ngOnInit(): void {
    this.checkRequiredFields(this.requiredFields);
    // checkRequired(this);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkRequiredFields(this.requiredFields);
    // checkRequired(this);
  }

  /**
   * Verifica os campos obrigatórios foram informados.
   * @param inputs lista de inputs que são obrigatórios
   */
  checkRequiredFields(inputs: any): void {
    // console.log('verificando campos obrigatórios', inputs);

    // inputs.forEach((input: any) => {
    //   console.log('verificando o campo', input);
    //   if (input === null) {
    //   // if (!input) {
    //     throw new Error(`O atributo ${input} é obrigatório!`);
    //   }
    // });
  }

  /**
   * Verifica qual das chaves de validação foram encontradas na
   */
  hasError(): boolean {
    let hasError = false;

    Object.keys(this.validators).forEach((keyValidator) => {
      if (this?.control?.dirty && this.control.hasError(keyValidator)) {
        this.textMessageError = this.validators[keyValidator];
        hasError = true;
      }
    });

    return hasError;
  }
}
