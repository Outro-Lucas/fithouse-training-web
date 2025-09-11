import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { AuthService } from '../../services/auth.service';
import { loginBody, Role } from '../../interfaces/user/user.type';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public loginForm = new FormGroup({
    email: new FormControl('', { validators: [Validators.email, Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
    // password: new FormControl('', { validators: [Validators.minLength(8), Validators.required] }),
  });

  constructor(
    private readonly router: Router,
    private readonly global: GlobalService,
    private readonly authService: AuthService,
  ) { }

  singIn() {
    if (this.loginForm.invalid) {
      console.error("Campos inválidos");
      return;
    }

    const body: loginBody = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || ''
    }

    this.authService.login(body).subscribe({
      next: (result: any) => {
        console.log(result);

        this.global.setSession(result.user, result.access_token);

        if (this.global.user?.type === Role.client) {
          this.router.navigate(['/treino']);
        } else if (this.global.user?.type === Role.trainer) {
          this.router.navigate(['/inicio']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error(error);
        return;
      }
    });

  }

}
