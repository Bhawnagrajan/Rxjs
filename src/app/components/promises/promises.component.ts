import { Component, OnInit } from '@angular/core';

import { promise } from 'selenium-webdriver';

@Component({
  selector: 'promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  dairyMilkAvail() {
    return true
  }
  kitkatAvail() {
    return false
  } 
  promiseval;
  dairymily={
    brand:'DairyMilk',
    sugar:' 500g',
    price: 'Rs.20/-'
  }
  kitkat={
    brand:'kitkat',
    sugar:' 30g',
    price: 'Rs.10/-'
  }
  notAvail={
    brand:'NOT AVAILABLE'
  }

  

  ngOnInit(): void {
    // let buyChocolate= new Promise(function(resolve,reject){          // using proper function method
    //  resolve("promise is resolve")
    // });
    let buyChocolate = new Promise((resolve, reject) => {               // using flat arrow function (ES6).
      // resolve("promise is resolve")
      // reject("promise is reject")
      if (this.dairyMilkAvail()) {
        return setTimeout(() => {
          // resolve("Dairy milk is  available")
          resolve(this.dairymily)

        }, 3000);
      } else if (this.kitkatAvail()) {
        return setTimeout(() => {
          // resolve("kitkat is avaulable")
          resolve(this.kitkat)

        }, 3000);

      } else {
        // reject("come back")
        reject(this.notAvail)

      }


    });
    buyChocolate.then(response => {              // .then is use for resolve(+ve) condition.
      console.log("then code =>", response)    // Reponse function is getting the value of resolve of promise buyChocolate here.
    this.promiseval=response;
    }).catch(response => {
      console.log("catch code =>", response)
      this.promiseval=response;
    })
  }

}
