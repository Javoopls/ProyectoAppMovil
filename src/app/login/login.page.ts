import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:string

  constructor(private router: Router) {}

  resetPass(){
    this.router.navigate(['/password']);
  }

  home(){

    let navigationExtra: NavigationExtras={
      state:{user: this.user}
    }

    this.router.navigate(['/home'],navigationExtra);
  }
  
  ngOnInit() {
  }

  

}
