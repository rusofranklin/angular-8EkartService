import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { VendorregistrationComponent } from './vendorregistration/vendorregistration.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CustomerRegistrationComponent, VendorregistrationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
