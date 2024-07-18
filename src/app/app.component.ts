import { Component, Input } from '@angular/core';
import { EmployeeModel } from './employee/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public mode: string = 'List';
    
    public employeeModel: EmployeeModel  = new EmployeeModel();


    public addEmployee(event: any) {
        this.employeeModel = new EmployeeModel();
        this.mode = "Add";
    }
    public updateEmployee(event: any) {
        this.employeeModel = event;
        this.mode = "Edit";
    }

    public cancel(event: any) {
        this.mode = 'List';
    }
    public submit(event: any){
        this.mode = 'List';
    }
}
