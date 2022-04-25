import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppentItemService {

  constructor() { }
  print(itemVal,containerID){
    let el= document.createElement('li')
    el.innerText=itemVal
    document.getElementById(containerID).appendChild(el)
  }
}
