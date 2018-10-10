import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { MePageModule } from '../me/me.module';
import { MsgPageModule } from '../msg/msg.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    MsgPageModule,
    MePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
