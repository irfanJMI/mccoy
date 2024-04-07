import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  private item$= new BehaviorSubject<any>({})
  constructor() { }
  
  getitem(){
    return this.item$.asObservable()
  }
  setItem(item:any){
    this.item$.next(item)

  }
}
