import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ConductorComponent } from 'src/app/components/conductor/conductor.component';
import { PasajeroComponent } from 'src/app/components/pasajero/pasajero.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,

    children:[
      {
        path: 'pasajero',
        component: PasajeroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
