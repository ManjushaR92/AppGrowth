import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

faGooglePlus = faGooglePlus;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
