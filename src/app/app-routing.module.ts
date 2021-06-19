import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';

const routes: Routes = [{
  path:'',
  component: MenuTemplateComponent,
  children:[
    {
      path:'',
      component: HomePageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
