import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SingletonTestService } from '../../services/singleton-test.service';
import { AnyTestService } from '../../services/any-test.service';
import { CustomChildComponent } from './custom-child/custom-child.component';
import { DefaultComponent } from '../detection-strategy/default/default.component';

@Component({
  selector: 'app-display-val',
  standalone: true,
  imports: [RouterLink, CustomChildComponent, DefaultComponent],
  providers: [AnyTestService],
  templateUrl: './display-val.component.html',
  styleUrl: './display-val.component.scss'
})
export class DisplayValComponent {
  singleService = inject(SingletonTestService);
  anyService = inject(AnyTestService)


  increaseValue(){
    this.singleService.increaseValueByOne();
  }
  increaseAnyValue(){
    this.anyService.increaseValueByOne();
  }



}
