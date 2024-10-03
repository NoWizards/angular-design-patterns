import { Component, inject } from '@angular/core';
import { SingletonTestService } from '../../services/singleton-test.service';
import { AnyTestService } from '../../services/any-test.service';

@Component({
  selector: 'app-lazy-info-val',
  standalone: true,
  imports: [],
  providers: [AnyTestService],
  templateUrl: './lazy-info-val.component.html',
  styleUrl: './lazy-info-val.component.scss'
})
export class LazyInfoValComponent {

  singleService = inject(SingletonTestService)
  anyService = inject(AnyTestService)


  increaseValue(){
    this.anyService.increaseValueByOne();
  }

}
