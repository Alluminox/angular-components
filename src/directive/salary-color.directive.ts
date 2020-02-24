import { Directive, ElementRef, Input } from '@angular/core';

/*
 *  Criando uma diretiva (propriedade para coponents)
 */
@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  constructor(private element: ElementRef) {
    
  }
    
  @Input() 
  set salaryColor(value: string) {
    const el: HTMLElement = this.element.nativeElement;
    el.style.color = parseFloat(value) >= 20000.0 ? 'green' : 'red';
  }

}