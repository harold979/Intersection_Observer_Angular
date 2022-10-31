import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PortraitComponent } from './pages/portrait/portrait.component';
import { ObserveElementDirective } from './pages/portrait/portrait.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    InformacionComponent,
    PortraitComponent,
    ObserveElementDirective,
  ],
  imports: [CommonModule, DataRoutingModule, MatButtonModule, MatCardModule],
})
export class DataModule {}
