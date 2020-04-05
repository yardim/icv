import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  pending = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(6), Validators.required])
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.markFieldsAsTouched();
      return;
    }

    this.pending = true;

    this.authService.login(this.form.value)
      .subscribe(response => {
        this.router.navigate(['/', 'admin']);
      });
  }

  private markFieldsAsTouched() {
    for (const controlName of Object.keys(this.form.value)) {
      this.form.get(controlName).markAsTouched();
    }
  }
}
