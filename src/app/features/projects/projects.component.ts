import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectsSection } from '../../core/data/cv';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input({ required: true }) section!: ProjectsSection;
}
