import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.textDecoration') textDecoration: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // Código executado ao carregar o componente que referencia a diretiva
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  // Código executado apenas ao focar no campo com a diretiva
  @HostListener('focus') onFocus(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.textDecoration = 'underline';
  }

  // Código executado apenas ao tirar o foco do campo com a diretiva
  @HostListener('blur') onBlur(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.textDecoration = 'none';
  }

}
