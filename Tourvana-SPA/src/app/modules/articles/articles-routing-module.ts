import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListContainer } from './container/articles-list-container/articles-list-container';

const routes: Routes = [
    { path: 'list', component:  ArticlesListContainer},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule {}
