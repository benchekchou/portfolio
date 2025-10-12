import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeroData, Identity } from '../../core/data/cv';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input({ required: true }) identity!: Identity;
  @Input({ required: true }) hero!: HeroData;
}
