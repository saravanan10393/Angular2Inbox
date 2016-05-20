import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup } from '@angular/common';

import { FormValidators } from '../shared/customFormValidators';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  
  loginForm:ControlGroup;
  
  constructor(private fb:FormBuilder) {
    this.loginForm = fb.group({
      email : ['',FormValidators.validateEmail],
      password:['',Validators.required]  
    }); 
  }

  ngOnInit() {
  }

}
