import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  private users:any;
  
  constructor(private http:Http) {
    http.get('./users.json').subscribe(res => this.users = res.json,err => console.log(err));
  }
  
  login(user){
    if(_.find(this.users,user)){
      return true;
    }
    return false;
  }

}
