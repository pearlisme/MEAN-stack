import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BindingComponent} from './binding/binding.component';
import { InvoiceComponent } from './invoice/invoice.component'

import { FormsModule } from '@angular/forms';
// import { OrderComponent } from './order/order.component';
import { IOModule } from './input-output/io.module';
import { DIModule } from './di/di.module';
import { CompLifeCycleComponent } from './lifecycle/lifecycle.component';
import {HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { IOModule } from './input-output/io.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    InvoiceComponent,
    // CompLifeCycleComponent,
    HttpComponent,
    NavbarComponent,
    // HttpdComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IOModule,
    DIModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
