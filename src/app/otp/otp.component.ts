import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    alert('OTP sent to registered Email id')
   }

  send(otp:any){
   
    this.dataService.postOtp(otp).subscribe((res:any)=>{

      if(res.status == 200){
        this.router.navigate(['/login']);
      }


    })
    
}
}