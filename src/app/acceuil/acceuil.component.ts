import { Component, ElementRef } from '@angular/core';
@Component({
  selector: 'app-acceuil', 
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css',

})
export class AcceuilComponent {

  constructor(private el: ElementRef) { }

  scrollToSection(section: string) {
    const element = this.el.nativeElement.ownerDocument.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}

