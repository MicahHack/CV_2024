import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WorkExp } from '../../Models/work-exp';

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
  @Input() icon?: string;
  @Input() title?: string;

  // Work Experience
  @Input() workItems?: WorkExp[];

  // Education

}
