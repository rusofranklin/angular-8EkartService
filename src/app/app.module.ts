import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { VendorRegistrationComponent } from './customer-registration/vendor-registration/vendor-registration.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CustomerRegistrationComponent, VendorRegistrationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
