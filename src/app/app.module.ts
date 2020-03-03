import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomerRegistrationComponent } from "./customer-registration/customer-registration.component";
import { VendorRegistrationComponent } from "./vendor-registration/vendor-registration.component";

const router: Route = [
  { path: "Customer", component: CustomerRegistrationComponent },
  { path: "Vendor", component: VendorRegistrationComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,RouterModule.forRoot(router)],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomerRegistrationComponent,
    VendorRegistrationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
