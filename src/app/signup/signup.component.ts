import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  showpassword = false;

  otp: any = [];

  resData: any = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signupForm = fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      LastName: ['', [Validators.required, Validators.minLength(2)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      MobileNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  ngOnInit(): void {}

  get getControls() {
    return this.signupForm.controls;
  }

  submit() {
    this.dataService.postSignup(this.signupForm.value).subscribe((res: any) => {
      if (res.status === 200) {
        const userId = JSON.stringify(res.data.recordsets[0].ID);
        if (userId) {
          sessionStorage.setItem('Id', userId);
        }
        alert('signup succefully !');
        this.router.navigate(['/verify/otp']);
      } else {
        alert(res.message);
      }
    });
  }
}
