import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthApi } from '../../../@shared/api/auth.api';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector    : 'app-signin',
  templateUrl : './signin.component.html',
  styleUrl    : './signin.component.scss',
  standalone  : true,
  imports     : [CommonModule, FormsModule]
})
export class SigninPage {

  private router: Router    = inject(Router);
  private $authApi: AuthApi = inject(AuthApi);

  public ui = {
    username: '',
    password: ''
  };

  public async processForm() {

    try {
      const result: any = await lastValueFrom(this.$authApi.signin(
        this.ui.username, this.ui.password
      ));

      localStorage.setItem('access_token', result.access_token);
      localStorage.setItem('refresh_token', result.refresh_token);
      this.router.navigateByUrl('/dashboard');
    }
    catch(error) {
      console.log(error);
    }
  }
}
