import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Subject } from 'rxjs';
import { PunchConfig } from '../models/punch-config';

const apiRoot = "http://201.12.20.40/timothy_jan/sqlwebpunch";

@Injectable({
  providedIn: 'root'
})
export class JantekService {
  isAuthenticatedChange: Subject<boolean> = new Subject<boolean>();
  punchConfiguration: PunchConfig | undefined = {
    "status": "OK",
    "logintype": 1,
    "clocktype": 1,
    "checklo": 0,
    "closetable": 2,
    "lunchlock": 1,
    "lunchlen": 30,
    "breaklock": 0,
    "breaklen": 0,
    "fk1": {
      "fktype": 18,
      "caption": "View Last Punch",
      "msg1": "",
      "msg2": "",
      "msg3": "",
      "PC": 0
    },
    "fk2": {
      "fktype": 19,
      "caption": "View Total Hour",
      "msg1": "",
      "msg2": "",
      "msg3": "",
      "PC": 0
    },
    "fk3": {
      "fktype": 5,
      "caption": "Company Change",
      "msg1": "Enter Company",
      "msg2": "",
      "msg3": "",
      "PC": 0
    },
    "fk4": {
      "fktype": 6,
      "caption": "Branch Change",
      "msg1": "Enter Branch",
      "msg2": "",
      "msg3": "",
      "PC": 0
    },
    "fk5": {
      "fktype": 7,
      "caption": "Dept Change",
      "msg1": "Enter Department",
      "msg2": "",
      "msg3": "",
      "PC": 0
    },
    "fk6": {
      "fktype": 17,
      "caption": "Tip Entry",
      "msg1": "Enter Tip",
      "msg2": "",
      "msg3": "",
      "PC": 7
    }
  };

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
      // get punch configuration
      this.getPunchConfiguration().subscribe(
        data => this.punchConfiguration = { ...data}
      );
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

  /** Https request to get punch configuration from server */
  getPunchConfiguration() {
    return this.http.get<PunchConfig>(`${apiRoot}/swp_getpunchcfg.asp`);
  }

  /** Return current Login Type */
  getLoginType() {
    return this.punchConfiguration?.logintype;
  }

  /** Returns current Clock Type */
  getClockType() {
    return this.punchConfiguration?.clocktype;
  }

  /** Returns current Auto Close type */
  getCloseTable() {
    return this.punchConfiguration?.closetable;
  }

  /** Returns current Check Lock-Out Profile */
  getCheckLo() {
    return this.punchConfiguration?.checklo;
  }

  /** Https request to post punch configuration to server */
  updatePunchConfiguration(form: any) {
    console.log(form);
    this._alertService.openSnackBar("Configuration Saved!");
  }

  getFK1() {
    return this.punchConfiguration?.fk1;
  }

  /** Https request to post function key update */
  functionKeyUpdate(form: any) {
    console.log(form);
    this._alertService.openSnackBar(`Function Key ${form['functionKeyNumber']} Saved!`);
  }
}
