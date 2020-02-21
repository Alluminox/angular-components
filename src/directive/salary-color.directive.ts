import { Directive, ElementRef, Input } from '@angular/core';

/*
 *  Criando uma diretiva (propriedade para coponents)
 */
@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  @Input() salaryColor: number;

  constructor(private element: ElementRef) {
    // Trabalhando com o elemento nativo
  
    this.element.nativeElement.style.color = 
      this.salaryColor * 1 > 20000.0 ? 'green' : 'red';
  }
}