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
// import { IOModule } from './input-output/io.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    InvoiceComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IOModule,
    DIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
