import { Component, inject } from '@angular/core';
import { SingletonTestService } from '../../../services/singleton-test.service';
import { AnyTestService } from '../../../services/any-test.service';

@Component({
  selector: 'app-custom-child',
  standalone: true,
  imports: [],
  providers:[],
  templateUrl: './custom-child.component.html',
  styleUrl: './custom-child.component.scss'
})
export class CustomChildComponent {
  singleService = inject(SingletonTestService);
  anyService = inject(AnyTestService)


  increaseValue(){
    this.singleService.increaseValueByOne();
  }
  increaseAnyValue(){
    this.anyService.increaseValueByOne();
  }



}