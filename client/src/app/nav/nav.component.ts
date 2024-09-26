import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountService);
  loggedIn = false;
  model: any = {};

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this.loggedIn = true;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  logout(): void {
    this.loggedIn = false
  }

}