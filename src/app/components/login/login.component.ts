import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password)
      .subscribe();
  }
}
