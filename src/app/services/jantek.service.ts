import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JantekService {
  isAuthenticatedChange: Subject<boolean> = new Subject<boolean>();

  /** DEMO ONLY */
  demoAdminName:string = "201";
  demoAdminPassword:string = "201";

  constructor(
    private _alertService: AlertService,
    private http: HttpClient
  ) { }

  /** Check user in database and login*/
  login(form: any): boolean {
    // Admin Authentication
    if(form.username == this.demoAdminName && form.password == this.demoAdminPassword) {
      this.isAuthenticatedChange.next(true);
      this._alertService.openSnackBar("Login Successful");
      // update Company Info
      // this.getCompanyInfo().subscribe(
      //   data => this.companyInfo = { ...data}
      // );
      return true;
    }
    this._alertService.openSnackBar("Incorrect Login");
    return false;
  }

    /** Log Off */
    logoff() {
      this.isAuthenticatedChange.next(false);
      this._alertService.openSnackBar("Logoff Successful");
    }

  updateConfiguration(form: any) {
    console.log(form);
  }
}
