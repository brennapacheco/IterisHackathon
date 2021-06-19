import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LeisPageComponent } from './componentes/leis-page/leis-page.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InstituicoesPageComponent } from './componentes/instituicoes-page/instituicoes-page.component';
import { SobrePageComponent } from './componentes/sobre-page/sobre-page.component';
import { LeisCardComponent } from './leis-card/leis-card.component';
import { InstituicoesCardComponent } from './instituicoes-card/instituicoes-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeisPageComponent,
    MenuTemplateComponent,
    InstituicoesPageComponent,
    SobrePageComponent,
    LeisCardComponent,
    InstituicoesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
