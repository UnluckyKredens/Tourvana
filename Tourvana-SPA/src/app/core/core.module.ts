import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from './layouts/footer/footer';
import { NavigationBar } from './layouts/navigation-bar/navigation-bar';
import { MainLayout } from './layouts/main-layout/main-layout';
@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    NavigationBar
  ],
  exports: []
})
export class CoreModule { }