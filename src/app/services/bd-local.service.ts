import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  user: IUser[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController:ToastController, public alertController:AlertController) {
    this.init();
    this.cargarUsuarios();
  }
  async cargarUsuarios() {
    const listaUsuarios = await this.storage.get('usuarios');
    if (listaUsuarios) {
      this.user=listaUsuarios;
    }
  }

  guardarUser(user: string, password: string){
    const existe=this.user.find(c=>c.strUser===user);
    if (!existe) {
      this.user.unshift({strUser:user, strPassword:password})
      this._storage.set('usuarios',this.user)
      this.presentAlert()
    } else {
      this.presentToast("Nombre de Usuario Ya Existente")
    }
  }

  validarUser(user: string, password: string){
    const existe=this.user.find(c=>c.strUser===user);
    if (!existe) {
      this.presentToast("Nombre de Usuario o Contraseña Erróneo")
    } else {
      return existe
    }
  }

  async init() {

    const storage = await this.storage.create();
    this._storage = storage;
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
