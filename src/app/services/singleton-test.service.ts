import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonTestService {

  private _initValue:number = 10;

  constructor() {
    this._initValue = 10;
    console.log("singleton init")
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
