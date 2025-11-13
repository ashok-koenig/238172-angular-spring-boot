import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  errorMessage:string =''
  constructor(private auth: Auth, private router: Router){}

  handleSubmit(data: NgForm){
    const user: User = data.value;
    this.auth.register(user).subscribe({
      next: (response)=>{
        if(response && response.message){
          this.router.navigate(['/login'])
        }
      }, error: (error)=> {
        this.errorMessage = "Something went wrong, please try again"
      }
    })
  }
}
