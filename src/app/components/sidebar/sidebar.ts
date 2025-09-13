import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(private auth: AuthService) { }

  open = false;

  toggleSidebar() {
    this.open = !this.open;
  }

  closeSidebar() {
    this.open = false;
  }

  logout() {
    this.open = false;
    this.auth.logout();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: any) {
    this.closeSidebar();
  }

}
