import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    user: '',
    password: ''
  }

  constructor(public toastController: ToastController , private router: Router, private alertController: AlertController, private bdLocal: BdLocalService) {}
  guardar(){
    this.bdLocal.guardarUser(this.usuario.user, this.usuario.password);
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form submit');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: 'Te has registrado con éxito!',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
