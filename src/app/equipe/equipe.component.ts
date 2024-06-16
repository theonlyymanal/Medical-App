import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent {
  showMore(event: Event): void {
    const button = event.target as HTMLElement;
    const card = button.closest('.card') as HTMLElement;
    card.classList.toggle('show_more');
    const moreText = card.querySelector('.more_text') as HTMLElement;
    const cardText = card.querySelector('.card_text') as HTMLElement;
    if (card.classList.contains('show_more')) {
      cardText.style.display = 'none';
      moreText.style.display = 'block';
    } else {
      cardText.style.display = 'block';
      moreText.style.display = 'none';
    }
  }
}
