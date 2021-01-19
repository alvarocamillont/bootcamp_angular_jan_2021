import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosAngularComponent } from './exemplos-angular/exemplos-angular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ExemplosAngularComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
