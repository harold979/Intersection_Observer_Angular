import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PortraitComponent } from './pages/portrait/portrait.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'informacion',
        component: InformacionComponent,
      },
      {
        path: 'portrait',
        component: PortraitComponent,
      },
      {
        path: '**',
        redirectTo: 'informacion',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}
