import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomerRegistrationComponent } from "./customer-registration/customer-registration.component";
import { VendorRegistrationComponent } from "./vendor-registration/vendor-registration.component";

const routes: Routes = [
  { path: 'customer', component: CustomerRegistrationComponent },
  { path: 'vendor', component: VendorRegistrationComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomerRegistrationComponent,
    VendorRegistrationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
