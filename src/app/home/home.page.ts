import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any
  constructor(public alertController: AlertController,private activeRoute:ActivatedRoute,private router:Router) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.user=this.router.getCurrentNavigation().extras.state.user
        console.log(this.user)
      }
    })

  }
  
  iniciar(){
    this.presentAlert
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciando viaje...',
      message: 'Buscando conductor...',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
