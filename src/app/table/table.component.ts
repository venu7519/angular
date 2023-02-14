import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  columns = [
    'Sr_no',
    'FirstName',
    'LastName',
    'MobileNo',
    'EmailID',
    'UserID',
    'start_date',
    'end_date',
    'info',
    'action',
  ];
  col = [
    'Sr_no',
    'district',
    'taluka',
    'village',
    'citysurveyoffice',
    'ward',
    'sheetno',
    'survey_number',
    'start_date',
    'end_date',
    'status',
  ];

  allUsers: any = [];
  users: any = [];

  constructor(private dataService: DataService, private router: Router) {
    dataService.getUsers().subscribe({
      next: (res) => {
        this.allUsers = new MatTableDataSource(res.data);
        this.allUsers.sort = this.sort;
        this.allUsers.paginator = this.paginator;
      },
      error: (err) => console.log(err),
      complete: () => console.info('completed'),
    });
  }

  ngOnInit(): void {}

  searchItems(item: any) {
    this.allUsers.filter = item.target.value;
  }

  removeUser(e: any) {
    console.log(e);
  }

  getInfo(id: any) {
    console.log(id);
    this.dataService.getUserById(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log(res.data);
        this.users = new MatTableDataSource(res.data);
        this.users.sort = this.sort;
        this.users.paginator = this.paginator;
      },
      error: (err) => console.log(err),
      complete: () => console.info('completed'),
    });
  }

  showHide() {
    this.users = '';
  }
}
