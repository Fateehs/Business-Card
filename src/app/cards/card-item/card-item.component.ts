import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
 @Input() card!: Card;
}
