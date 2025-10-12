import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactSection } from '../../core/data/cv';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input({ required: true }) section!: ContactSection;
  @Input({ required: true }) footerNote!: string;
  @Input({ required: true }) identityName!: string;

  readonly currentYear = new Date().getFullYear();
}
