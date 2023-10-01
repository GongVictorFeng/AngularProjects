import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { }

  @Input('appClass') set className(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
