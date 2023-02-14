import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forgetpswd',
  templateUrl: './forgetpswd.component.html',
  styleUrls: ['./forgetpswd.component.css']
})
export class ForgetpswdComponent implements OnInit {

  submitEmail:FormGroup;

  showpassword=false;

  otp:any=[]

  resData:any= [];

  constructor(private dataService:DataService, private router:Router, private fb:FormBuilder){
    
    this.submitEmail = fb.group({
    Email :['', [Validators.required, Validators.email]],
      });
 
}
  ngOnInit(): void {
  }

  
get getControls(){
  return this.submitEmail.controls;
}

submit(){
 this.dataService.postEmail(this.submitEmail.value).subscribe((res:any)=>{
  if(res.status === 200){
    alert('Password sent to your registered EmailId')
    this.router.navigate(['/login']);
  }
  else{
alert('User Not Found or Wrong Email')
  }
   
  }
  )

}


}
