import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppentItemService } from 'src/app/services/appent-item.service';


@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit , AfterViewInit {

  constructor( private appentItem:AppentItemService) { }
  @ViewChild('addBtn') addBtn:ElementRef

  ngOnInit(): void {
 }
  ngAfterViewInit(){   
    let count= 1;   
               // viewchild is use in ngafterViewInit always
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res =>{
      let itemVal= 'item ' + count++ 
      console.log(itemVal)
      this.appentItem.print(itemVal, 'elContainer')
      this.appentItem.print(itemVal, 'elContainer2')
    })
  }
 

}
