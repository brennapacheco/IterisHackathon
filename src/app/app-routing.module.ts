import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LeisPageComponent } from './componentes/leis-page/leis-page.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';

const routes: Routes = [{
  path:'',
  component: MenuTemplateComponent,
  children:[
    {
      path:'',
      component: HomePageComponent
    },
    {
      path: 'leis-page',
      component: LeisPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
