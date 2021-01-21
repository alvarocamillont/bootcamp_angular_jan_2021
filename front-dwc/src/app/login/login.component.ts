import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLogin } from '@po-ui/ng-templates';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logo = '/assets/download.png';

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login(poLogin: PoPageLogin): void {
    this.service.login(poLogin).subscribe((token: any) => {
      this.router.navigate(['home']);
    });
  }
}
