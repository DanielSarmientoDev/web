import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './SharedModule/shared.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './Core/core.module';
import { NgxPictureModule } from 'ngx-picture';
@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    CoreModule,
    NgxPictureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
