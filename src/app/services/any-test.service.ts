import { Injectable } from '@angular/core';

@Injectable({providedIn:null})
export class AnyTestService {

  private _initValue:number =100;

  constructor() {
    console.log("creating new instance of any service")
   }

  get initValue():number {
    return this._initValue;
  }
  
  set initValue(newVal: number){
    this._initValue = newVal
  }

  increaseValueByOne(){
    this._initValue+=1;
  }


}
