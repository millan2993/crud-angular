import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amillan';
  updating:number = 0;

  employees = [
    {
      'first_name': 'Carlos',
      'last_name' : 'Perez'
    },
    {
      'first_name': 'Juan',
      'last_name' : 'Gómez'
    }
  ];

  model:any = {};


  save(): void {

    if (this.updating == 0) {
      this.employees.push(this.model);
    }

    this.updating = 0;
    this.model = {};
  }

  edit(i):void {
    this.model = this.employees[i];
    this.updating = i+1;
  }


  delete(i):void {
    this.employees.splice(i, 1);
  }

}
