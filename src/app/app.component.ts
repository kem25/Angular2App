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
    List of Employers
    <table class="table table-striped">
    <tr>
    <th>Employer</th>
    <th>Salary</th>
    <th>Gender</th>
    <th>Company</th>
    <th>Age</th>
    </tr>
    <tr *ngFor="let employer of employers">
    <td>{{employer.Name}}</td>
    <td>{{employer.Salary}}</td>
    <td>{{employer.gender}}</td>
    <td>{{employer.Company}}</td>
    <td>{{employer.Age}}</td>
    </tr>
    </table>
    <button class="btn btn-primary">Test</button>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'my first angular app';
  CompanyName = 'Google';
  Count = 10;

  getName():string{
    return 'Komala';
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
  Company:'ATT',
  gender: 'M', 
  Salary: 10000
},
{
  Name: 'Enoch',
  Age:24,
  Company:'ATT',
  gender: 'F', 
  Salary: 50000
},
{
  Name: 'Peter',
  Age:23,
  Company:'ATT',
  gender: 'M', 
  Salary: 20000
}
]




}
