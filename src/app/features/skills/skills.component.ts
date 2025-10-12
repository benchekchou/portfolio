import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillsSection } from '../../core/data/cv';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input({ required: true }) section!: SkillsSection;
}
