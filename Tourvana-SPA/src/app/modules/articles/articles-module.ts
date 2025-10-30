import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListContainer } from './container/articles-list-container/articles-list-container';
import { ArticlesRoutingModule } from './articles-routing-module';
import { MaterialModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    ArticlesListContainer
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule,
]
})
export class ArticlesModule { }
