import { map } from 'rxjs/operators';
import { ResponseModel } from "../common/model/response.model";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from './employee.model';

@Injectable({
    providedIn:'root'   // inject this service in root
})

export class EmployeeService {
                                //in this class we inject HttpClient Service
    constructor(private http : HttpClient){}

    get(): Observable<EmployeeModel[]> {
        return this.http.get<EmployeeModel[]>('https://localhost:7225/api/Employee/get').pipe(
            map((response: any) => {
                return response.data;
            })
        );
    }

    //methodName                           //returnType (afterCollon)         when use Observable- where we use it 
    insert(employeeModel: EmployeeModel): Observable<void> {                                       // we have to subscribe it
        return this.http.post<void>('https://localhost:7225/api/Employee/insert', employeeModel).pipe(
            map((response: any) => {
                return;
            })
        )
    }

    update(employeeModel: EmployeeModel): Observable<void> {
        return this.http.post<void>('https://localhost:7225/api/Employee/update',employeeModel).pipe(
            map((response: any) => {
                return;
            })
        )
    }

    delete(id: number): Observable<void> {
        return this.http.post<void>(`https://localhost:7225/api/Employee/delete/${id}`, null).pipe(
            map((response: any) => {
                return;
            })
        )
    }
}
