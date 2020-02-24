import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
@NgModule({
  imports:   [ HttpClient ],
})
export class CustomerRegistrationComponent {
form: FormGroup;
  constructor(public fb: FormBuilder, private httpClient: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      avatar: ['']
    }) 
   
}
 SubmitForm() {
    console.log("this.form.value")
  }
}