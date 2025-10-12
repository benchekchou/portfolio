import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EducationSection, Link } from '../../core/data/cv';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input({ required: true }) section!: EducationSection;

  isLink(item: string | Link): item is Link {
    return typeof item === 'object' && item !== null && 'href' in item;
  }

  trackListItem(_: number, item: string | Link): string {
    return typeof item === 'string' ? item : item.label;
  }
}
