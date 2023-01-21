import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImputPageRoutingModule } from './imput-routing.module';

import { ImputPage } from './imput.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImputPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ImputPage]
})
export class ImputPageModule {}
