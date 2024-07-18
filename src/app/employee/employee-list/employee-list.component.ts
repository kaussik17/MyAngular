import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from 'src/app/department/department.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnChanges {
    @Input() mode: string = '';
    @Output() EmployeeUpdate: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();
    @Output() EmployeeAdd: EventEmitter<void> = new EventEmitter<void>();


    public employeeModel : EmployeeModel = new EmployeeModel();
    public employees : EmployeeModel[] = [];
    
    constructor ( private employeeService : EmployeeService, private departmentService : DepartmentService) {
        this.fillEmployee();
    }

    
    ngOnChanges(changes: SimpleChanges): void {
        if(changes["mode"] && !changes["mode"].isFirstChange() && this.mode=='List'){
            this.fillEmployee();
        }
    }

    public fillEmployee(): void {
        this.employeeService.get().subscribe(x => {
            this.employees = x;
        })
    }

    public add(): void{
        this.EmployeeAdd.emit();
    }

    public update(employeeModel: EmployeeModel): void{
        this.EmployeeUpdate.emit(employeeModel);
    }

    public delete(id: number){
        if(window.confirm("Are you sure you want to delete this Record !")){
            this.employeeService.delete(id).subscribe(x => {
                // setInterval(() => alert("Delete SuccesFully"),1000);
                alert("Delete SuccesFully");
                this.fillEmployee();
            });
        };      
    }

}
