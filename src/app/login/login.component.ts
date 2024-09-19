import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  registrationForm: FormGroup;

  fields: any = [
    {
      name: 'correoElectronico',
      type: 'email',
      label: 'Correo electrónico',
      placeholder: 'ejemplo@correo.com',
    },
    {
      name: 'contrasena',
      type: 'password',
      label: 'Contraseña',
      placeholder: 'Introduce tu contraseña',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({});
    this.initForm();
  }

  initForm() {
    const formControls: { [key: string]: AbstractControl } = {};
    this.fields.forEach((field: any) => {
      formControls[field.name] = this.fb.control('', Validators.required);
    });
    this.registrationForm = this.fb.group(formControls);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted', this.registrationForm.value);
    }
  }
}
