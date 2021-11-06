import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  user:''

  constructor(public toastController: ToastController , private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  login(){
    this.presentAlert()
    this.router.navigate(['/login'])
  }

  onSubmitTemplate(){
    console.log('Form submit');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: 'Se ha enviado un enlace a tu correo asociado.',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
