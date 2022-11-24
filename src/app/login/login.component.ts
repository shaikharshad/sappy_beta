import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  Email = new FormControl('');
  password = new FormControl( '', [ Validators.required, Validators.minLength(8)]);

  
  Login(){
    console.log(this.Email.value  , this.password.value ,"name ");
    
    
  }
  ngOnInit(): void {
  }

}
