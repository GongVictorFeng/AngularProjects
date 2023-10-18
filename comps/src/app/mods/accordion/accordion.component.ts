import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items = [] as any;
  openedItemIndex = 0;

  onClick(i: number) {
    if(i === this.openedItemIndex){
      this.openedItemIndex = -1;
      return;
    }
    this.openedItemIndex = i;
  }
}
