import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WorkExp } from '../../Models/work-exp';
import { EducationExp } from '../../Models/education-exp';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})

export class TimelineComponent {
  @Input() icon!: string;
  @Input() title!: string;

  // Profile content
  @Input() profileContent?: string;

  // Work Experience
  @Input() workItems?: WorkExp[];

  // Education
  @Input() educationItems?: EducationExp[];
}
