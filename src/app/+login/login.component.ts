import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup } from '@angular/common';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { FormValidators } from '../shared/customFormValidators';
import { LoginService } from './shared/login.service.ts';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  
  loginForm:ControlGroup;
  
  constructor(private fb:FormBuilder,private router:Router,private loginService:LoginService) {
    this.loginForm = fb.group({
      email : ["",FormValidators.validateEmail],
      password:["",Validators.required]  
    }); 
    console.log('form ',this.loginForm)
  }
  
  login(){
    if(this.loginService.login(this.loginForm.value)){
      this.router.navigate(['dashboard']);
    } else{
      
    }
  }

  ngOnInit() {
  }

}
