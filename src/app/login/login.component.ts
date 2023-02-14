import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitEmail: FormGroup;

  showpassword = false;

  otp: any = [];

  resData: any = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.submitEmail = fb.group({
      EmailOrMobileNo: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {}

  get getControls() {
    return this.submitEmail.controls;
  }

  submit() {
    this.dataService.postLogin(this.submitEmail.value).subscribe((res: any) => {
      const Email = res.data.Email;
      if (Email) {
        sessionStorage.setItem('Email', Email);
        alert('Sing in successfully');
        this.router.navigate(['/home']);
      }
    });
  }
}

