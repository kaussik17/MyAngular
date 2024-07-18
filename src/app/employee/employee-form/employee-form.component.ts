import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EmployeeModel } from '../employee.model';
import { DepartmentService } from 'src/app/department/department.service';
import { EmployeeService } from '../employee.service';
import { DepartmentModel } from 'src/app/department/department.model';
import { HobbyModel } from 'src/app/common/model/checkbox.model';
 
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnChanges {
    @Input() mode: string = '';
    @Input() employeeModel: EmployeeModel  = new EmployeeModel();
    @Output() cancelEmployee: EventEmitter<void> = new EventEmitter<void>();
    @Output() submitEmployee: EventEmitter<void> = new EventEmitter<void>();

    public Hobbies : HobbyModel[] = [];

    public departments: DepartmentModel[] = [];

    constructor(private departmentService:DepartmentService, private employeeService: EmployeeService)
    {
        this.Hobbies = [
            {
                isSelected:false,
                name: "Reading"
            },
            {
                isSelected:false,
                name: "Gaming"
            },
            {
                isSelected:false,
                name: "Parting"
            }
        ];
        this.fillDepartment();
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        if(changes["employeeModel"] && this.mode ==  "Edit"){
            if(this.employeeModel.hobby != ''){
                let selectedHobbies: string[] = this.employeeModel.hobby.split(",");

                for(let i=0;i<this.Hobbies.length;i++){
                    for(let j=0; j<selectedHobbies.length;j++){
                        if(selectedHobbies[j].toLocaleLowerCase() == this.Hobbies[i].name.toLocaleLowerCase()){
                            this.Hobbies[i].isSelected=true;
                        }
                    }
                }
            }
        }
    }


    
    public fillDepartment(): void{
        this.departmentService.get().subscribe( x => {this.departments = x});
    }
    public submit(): void{
        this.employeeModel.hobby = '';
        for(let i=0; i<this.Hobbies.length; i++){
            if(this.Hobbies[i].isSelected == true){
                this.employeeModel.hobby += this.Hobbies[i].name +',';
            }
        }

        this.employeeModel.hobby = this.employeeModel.hobby.substring(0,this.employeeModel.hobby.length-1);

        if(this.mode == 'Add'){
            this.employeeService.insert(this.employeeModel).subscribe(x => {
                alert("Submit Successfully !")
                this.submitEmployee.emit();
            });

        }else{
            this.employeeService.update(this.employeeModel).subscribe(x => {
                alert("Submit Successfully !");
                this.submitEmployee.emit();
            });
        }
    }



    public cancel(): void {
        this.cancelEmployee.emit();
    }
}
