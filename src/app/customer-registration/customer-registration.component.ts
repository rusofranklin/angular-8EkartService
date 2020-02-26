import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-customer-registration",
  templateUrl: "./customer-registration.component.html",
  styleUrls: ["./customer-registration.component.css"]
})
@NgModule({
  imports: [HttpClient]
})
export class CustomerRegistrationComponent {
  firstname = "";

  person = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    areaCode: "",
    phoneNumber: "",
    presentAddress: ""
  };
  onClickSubmit(data) {
    this.person.firstName = data.first_name;
    this.person.lastName = data.last_name;
    this.person.emailAddress = data.email_address;
    this.person.areaCode = data.area_code;
    this.person.phoneNumber = data.phone_number;
    this.person.presentAddress = data.present_address;

    console.log(data);
  }
}
