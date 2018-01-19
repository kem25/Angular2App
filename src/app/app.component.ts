import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello to Templates</h1>
  Company = {{CompanyName}}<br>
  Count = {{Count+1}}<br>
  Name = {{getName()}}<br>
  {{employee.age}}<br>
  {{employee.group}}<br>
  {{employee.address.city}}<br>
  States Visited<br>
  <ul>
    <li *ngFor="let state of employee.states">
    {{state}}
    </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'my first angular app';
  CompanyName = 'Google';
  Count = 10;

  getName(){
    return 'Komala';
  }

  employee = {
    age: 20,
    group: 'B',
    address: {
      city: 'Coppell',
      State: 'TX'
    },
    states : ['TX','AZ','CT'];
  }

 
}
