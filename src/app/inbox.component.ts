import { Component } from '@angular/core';
import { Routes ,Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { LoginComponent } from './+login';
import { SignupComponent } from './+signup';
import { DashboardComponent } from './+dashboard';

@Component({
  moduleId: module.id,
  selector: 'inbox-app',
  templateUrl: 'inbox.component.html',
  styleUrls: ['inbox.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
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
