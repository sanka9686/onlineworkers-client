import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Register } from 'src/app/models/Register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-registration',
  templateUrl: './page-registration.component.html',
  styleUrls: ['./page-registration.component.css']
})
export class PageRegistrationComponent implements OnInit {
  hide=true;
user:Register=new Register()
 registerForm:FormGroup
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      'username':[this.user.username, 
                    [Validators.required]],
      'password':[this.user.password, 
                        [Validators.required,
                           Validators.minLength(6), 
                            Validators.maxLength(16)]],
       'email':[this.user.email,
                   [Validators.required,
                       Validators.email ]],
        'contact':[this.user.contact,
                        [Validators.required,
                          Validators.pattern('[0-9]{10}')
                          ]]                                  
    })
  }
  onSubmitRegister(){
    alert(this.user.username+"\n"+this.user.password+"\n"+this.user.email);
  }
  login(){
    this.route.navigate(['login']);
  }

}
