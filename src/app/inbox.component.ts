import { Component } from '@angular/core';
import { Routes ,Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import { LoginComponent } from './+login';
import { SignupComponent } from './+signup';
import { DashboardComponent } from './+dashboard';

@Component({
  moduleId: module.id,
  selector: 'inbox-app',
  templateUrl: 'inbox.component.html',
  styleUrls: ['inbox.component.css'],
  directives: [ROUTER_DIRECTIVES,MATERIAL_DIRECTIVES],
  providers: [ROUTER_PROVIDERS,MATERIAL_PROVIDERS]
})
@Routes([
  {path: '/login', component: LoginComponent},
  {path: '/signup', component: SignupComponent},
  {path: '/dashboard', component: DashboardComponent}
])
export class InboxAppComponent {
  title = 'inbox works!';
  constructor(private router:Router){
    router.navigate(['/login']);
  }
}
