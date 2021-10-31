import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  userName!: FormControl;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl("", [Validators.email, Validators.required]);
    this.password = new FormControl("", [
        Validators.minLength(8),
        Validators.required
    ]);
    this.userName = new FormControl("", [
        Validators.required
    ]);
}

createForm() {
    this.registrationForm = new FormGroup({
        email: this.email,
        password: this.password,
        userName: this.userName
    });
}


}
