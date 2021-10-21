import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:string

  constructor(private router: Router, public loadingController: LoadingController) {}

  resetPass(){
    this.router.navigate(['/password']);
  }

  home(){

    this.presentLoading();
    let navigationExtra: NavigationExtras={
      state:{user: this.user}
    }
    this.router.navigate(['/home'],navigationExtra);
  }
  
  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Iniciando Sesión...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  } 

}
