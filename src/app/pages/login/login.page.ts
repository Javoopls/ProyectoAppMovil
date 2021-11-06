import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    user: '',
    password: ''
  }

  constructor(private router: Router, private rest:APIClientService, public loadingController: LoadingController, private bdLocal:BdLocalService, public toastController:ToastController) {}

  onSubmitTemplate(){
    console.log('Form submit');
  }

  resetPass(){
    this.router.navigate(['/password']);
  }

  newUser(){
    this.router.navigate(['/registro']);
  }

  api(){
    this.router.navigate(['/rest']);
  }

  home(){
    this.presentLoading();
    let navigationExtra: NavigationExtras={
      state:{user: this.usuario.user}
    }
    this.router.navigate(['/home/pasajero'],navigationExtra);
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

  getUser(){
    this.rest.getUsuario(this.usuario.user).subscribe
  }

  async presentToast(mensaje:string) {

    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
