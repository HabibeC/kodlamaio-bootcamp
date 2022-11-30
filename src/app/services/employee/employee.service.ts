import { HttpClient } from '@angular/common/http';
import { IEmployeeModel } from '../../models/employee/request/EmployeeAllModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  allEmployee: IEmployeeModel[] = [];
  constructor(private httpClient: HttpClient) {}
  getAllEmployees() {}
  getEmployeeById() {}
  addEmployee() {}
  updateEmployee() {}
  deleteEmployee() {}
}