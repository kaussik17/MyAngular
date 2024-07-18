import { map } from 'rxjs/operators';
import { ResponseModel } from "../common/model/response.model";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DepartmentModel } from './department.model';

@Injectable({
    providedIn: 'root',
})
export class DepartmentService {

    constructor(private http: HttpClient) {}

    get(): Observable<DepartmentModel[]> {
        return this.http.get<DepartmentModel[]>('https://localhost:7225/api/Department/get').pipe(
            map((response: any) => {
                return response.data;
            })
        );
    }
}
