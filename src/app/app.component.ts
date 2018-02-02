import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('temp1')
  pElement:ElementRef;
  title = 'app';
  name = 'my first angular app';
  CompanyName = 'Google';
  Count = 10;

  getName():string{
    return 'Komala';
  }

  handleInput(event){
    let value1 = ((<HTMLInputElement>event.target).value);
    console.log(value1);
  }

  handleMouseEnter(event:MouseEvent){
    let value2 = ((<HTMLInputElement>event.target).value);
    console.log(value2);
  }

  sendTempContent(content:string){
    console.log(content);
  } 

  sendPContent(){
    console.log(this.pElement.nativeElement.textContent);
  }

  handleboxClickedEvent(event){
    console.log(event);
  }
  employee = {
    age: 20,
    group: 'B',
    address: {
      city: 'Coppell',
      State: 'TX'
    },
    states : ['TX','AZ','CT']
  }

employers =[{
  Name: 'Adam',
  Age:23,
  active: true,
  Company:'ATT',
  gender: 'M', 
  Salary: 10000
},
{
  Name: 'Enoch',
  Age:24,
  active: false,
  Company:'ATT',
  gender: 'F', 
  Salary: 50000
},
{
  Name: 'Peter',
  Age:23,
  active: true,
  Company:'ATT',
  gender: 'M', 
  Salary: 20000
}
]
}
