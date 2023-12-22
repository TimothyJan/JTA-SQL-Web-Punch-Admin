import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  navLinks = [
    { path: '/pc-punch-configuration', label: 'PC Punch Configuration' },
    { path: '/pc-punch-configuration', label: 'PC Punch Configuration' },
    { path: '/function-key', label: 'Function Key' },
  ];
  // Sidenav toggle flag
  isSidenavOpen = false;

  constructor(
    private router: Router,
    private _jantekService: JantekService
  ) {}

  ngOnInit(): void {

  }

  closeSideNav() {
    this.isSidenavOpen = false;
  }
  /** Toggle the Sidenav */
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  /** Navigate to the specified route and close the Sidenav */
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSideNav();
  }

  /** HostListener to update the flag on window resize */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.closeSideNav();
  }

  logoff() {
    this._jantekService.logoff();
    this.router.navigate(['/login']);
  }
}
