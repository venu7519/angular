import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
constructor(private http:HttpClient, private router: Router) { }

postSignup(data:any){
return this.http.post('https://qaapi.jahernotice.com/Admin/SignUp', data)
}

postOtp(otp:any){
  const userId:any = sessionStorage.getItem("Id");
  Object.assign(otp, {Id:JSON.parse(userId)})   
  return this.http.post('https://qaapi.jahernotice.com/Admin/OTP/verify', otp)
}


postEmail(email:any){
  return this.http.post('https://qaapi.jahernotice.com/Admin/Password/send', email)
}

postLogin(data:any){
  return this.http.post('https://qaapi.jahernotice.com/Admin/SignIn',data)
}


getUsers(): Observable<any> {
  return this.http.get('https://qaapi.jahernotice.com/api/Epp/0')
}


getUserById(id:any):Observable<any>{
  return this.http.get('https://qaapi.jahernotice.com/api/EppByID/'+id);
}

logOut(){
  sessionStorage.removeItem('Email');
  this.router.navigate(['/login'])
}

}