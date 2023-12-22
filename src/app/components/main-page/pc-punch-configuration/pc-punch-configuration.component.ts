import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-pc-punch-configuration',
  templateUrl: './pc-punch-configuration.component.html',
  styleUrl: './pc-punch-configuration.component.css'
})
export class PcPunchConfigurationComponent implements OnInit{
  configurationForm: FormGroup = new FormGroup({
    loginType: new FormControl("Employee # and Card #", Validators.required),
    clockType: new FormControl("In and Out", Validators.required),
    autoClose: new FormControl("Auto Close Tables After Five Minutes of Inactivity", Validators.required),
    checkLockOutProfile: new FormControl(false, Validators.required),
  });

  constructor(
    private _jantekService: JantekService
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.configurationForm.valid) {
      this._jantekService.updateConfiguration(this.configurationForm.value);
    }
  }

}
