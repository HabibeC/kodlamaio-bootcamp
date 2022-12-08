import { Store } from '@ngrx/store';
import { CurrentUserService } from './../../services/current-user/current-user.service';
import { DashboardService } from './../../services/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalApplicants = 0;
  totalEmployee = 0;
  totalInstructors = 0;
  totalBootcamps = 0;
  currentUserId = 0;
  userInfo: string;

  today: Date = new Date();
  date: any =
    this.today.getDate() +
    '/' +
    this.today.getMonth() +
    '/' +
    this.today.getFullYear();

  constructor(
    private dashboardService: DashboardService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.getAllApplicants();
    this.getTotalEmployee();
    this.getTotalInstructors();
    this.getTotalBootcamps();
    this.getUser();
  }
  getAllApplicants() {
    this.dashboardService.getTotalApplicants().subscribe((data: any) => {
      this.totalApplicants = data.length;
    });
  }
  getTotalEmployee() {
    this.dashboardService.getTotalEmployee().subscribe((data: any) => {
      this.totalEmployee = data.length;
    });
  }
  getTotalInstructors() {
    this.dashboardService.getTotalInstructors().subscribe((data: any) => {
      this.totalInstructors = data.length;
    });
  }
  getTotalBootcamps() {
    this.dashboardService.getTotalBootcamps().subscribe((data: any) => {
      this.totalBootcamps = data.length;
    });
  }
  getUser() {
    this.currentUserId = JSON.parse(localStorage.getItem('id'));
    this.currentUserService
      .getUserById(this.currentUserId)
      .subscribe((data) => {
        console.log(data, ' Bu data');
        this.userInfo = `${data.firstName} ${data.lastName}`;
      });
  }
}
