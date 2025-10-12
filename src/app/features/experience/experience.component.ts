import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExperienceSection } from '../../core/data/cv';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input({ required: true }) section!: ExperienceSection;
}
