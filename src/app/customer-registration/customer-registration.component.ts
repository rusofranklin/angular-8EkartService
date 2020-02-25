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
first_name='';
 onClickSubmit(data) {this.first_name = data.first_name;
  console.log(this.first_name);
  }
}

