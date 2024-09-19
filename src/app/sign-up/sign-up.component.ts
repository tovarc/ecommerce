import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

interface FormField {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  registrationForm: FormGroup;
  isVendor = false;
  formType: 'login' | 'register' = 'register';

  clientFields: FormField[] = [
    {
      name: 'nombre',
      type: 'text',
      label: 'Nombre',
      placeholder: 'Ej: Juan Pérez',
    },
    { name: 'dni', type: 'text', label: 'DNI', placeholder: 'Ej: 12345678A' },
    {
      name: 'direccion',
      type: 'text',
      label: 'Dirección',
      placeholder: 'Ej: Calle Mayor 123, Madrid',
    },
    { name: 'cp', type: 'text', label: 'CP', placeholder: 'Ej: 28001' },
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
    {
      name: 'confirmaContrasena',
      type: 'password',
      label: 'Confirma contraseña',
      placeholder: 'Repite tu contraseña',
    },
  ];

  vendorFields: FormField[] = [
    {
      name: 'nombre',
      type: 'text',
      label: 'Nombre',
      placeholder: 'Ej: María García',
    },
    {
      name: 'nombreEmpresa',
      type: 'text',
      label: 'Nombre de la empresa',
      placeholder: 'Ej: Servicios Rápidos S.L.',
    },
    {
      name: 'telefono',
      type: 'tel',
      label: 'Teléfono',
      placeholder: 'Ej: 612345678',
    },
    {
      name: 'descripcionServicio',
      type: 'text',
      label: 'Descripción de tu servicio',
      placeholder: 'Ej: Reparación de electrodomésticos',
    },
    {
      name: 'direccion',
      type: 'text',
      label: 'Dirección',
      placeholder: 'Ej: Avenida Principal 45, Barcelona',
    },
    { name: 'cp', type: 'text', label: 'CP', placeholder: 'Ej: 08001' },
    {
      name: 'correoElectronico',
      type: 'email',
      label: 'Correo electrónico',
      placeholder: 'empresa@ejemplo.com',
    },
    {
      name: 'contrasena',
      type: 'password',
      label: 'Contraseña',
      placeholder: 'Introduce tu contraseña',
    },
    {
      name: 'confirmaContrasena',
      type: 'password',
      label: 'Confirma contraseña',
      placeholder: 'Repite tu contraseña',
    },
  ];

  get formFields(): FormField[] {
    return this.isVendor ? this.vendorFields : this.clientFields;
  }

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({});
    this.initForm();
  }

  initForm() {
    const formControls: { [key: string]: AbstractControl } = {};
    this.formFields.forEach((field) => {
      formControls[field.name] = this.fb.control('', Validators.required);
    });
    this.registrationForm = this.fb.group(formControls);
  }

  toggleUserType() {
    this.isVendor = !this.isVendor;
    this.initForm();
  }

  setFormType(type: 'login' | 'register') {
    this.formType = type;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted', this.registrationForm.value);
      // Handle form submission
    } else {
      console.log('Form is invalid');
      // Handle invalid form
    }
  }
}
