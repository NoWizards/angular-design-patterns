import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-parent-progress',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './parent-progress.component.html',
  styleUrl: './parent-progress.component.scss'
})
export class ParentProgressComponent {

}
