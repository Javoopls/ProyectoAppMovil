import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.scss'],
})
export class PasajeroComponent implements OnInit {

  map: any;
  user: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(private alertController: AlertController, private activeRoute:ActivatedRoute, private router:Router) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.user=this.router.getCurrentNavigation().extras.state.user
        console.log(this.user)
      }
    })
    this.router.navigate(['home/pasajero'])
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.mostrarMapa();
  }

  mostrarMapa(){
    const ubicacion = new google.maps.LatLng(-33.03356339422225, -71.53282331353559)
    const opciones = {
      center: ubicacion,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, opciones)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciando Viaje...',
      message: 'Buscando Conductor...',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
