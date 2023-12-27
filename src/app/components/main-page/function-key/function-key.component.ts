import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';
import { FunctionKey } from '../../../models/function-key';

@Component({
  selector: 'app-function-key',
  templateUrl: './function-key.component.html',
  styleUrl: './function-key.component.css'
})
export class FunctionKeyComponent implements OnInit{

  @Input() functionKeyNumber: number = 0;
  @Input() fk:FunctionKey = {
    "fktype": 1,
    "caption": "",
    "msg1": "",
    "msg2": "",
    "msg3": "",
    "PC": 0
  };

  functionKeyForm = new FormGroup({
    functionKeyNumber: new FormControl(0, Validators.required),
    fktype: new FormControl(1, Validators.required),
    caption: new FormControl("None", Validators.required),
    msg1: new FormControl({value: "", disabled: true}, [Validators.required]),
    msg2: new FormControl({value: "", disabled: true}, [Validators.required]),
    msg3: new FormControl({value: "", disabled: true}, [Validators.required]),
    PC: new FormControl({value: 0, disabled: true}, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
  });

  constructor(
    private _jantekService: JantekService,
  ) {}

  ngOnInit(): void {
    this.functionKeyForm.controls["functionKeyNumber"].setValue(this.functionKeyNumber);
    this.functionKeyForm.controls["fktype"].setValue(this.fk["fktype"]);
    this.functionKeyForm.controls["caption"].setValue(this.fk["caption"]);
    if(this.fk["msg1"]) {
      this.functionKeyForm.controls["msg1"].enable();
      this.functionKeyForm.controls["msg1"].setValue(this.fk["msg1"]);
    }
    if(this.fk["msg2"]) {
      this.functionKeyForm.controls["msg2"].enable();
      this.functionKeyForm.controls["msg2"].setValue(this.fk["msg2"]);
    }
    if(this.fk["msg3"]) {
      this.functionKeyForm.controls["msg3"].enable();
      this.functionKeyForm.controls["msg3"].setValue(this.fk["msg3"]);
    }
    if(this.fk["PC"]) {
      this.functionKeyForm.controls["PC"].enable();
      this.functionKeyForm.controls["PC"].setValue(this.fk["PC"]);
    }
  }

  typeChanged(event: any) {
    this.clearMessagesAndPayCode();
    switch(event) {
      case 0: /** None */
        this.functionKeyForm.controls["caption"].setValue("None");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 1: /** None */
        this.functionKeyForm.controls["caption"].setValue("None");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 2: /** In */
        this.functionKeyForm.controls["caption"].setValue("IN");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 3: /** Out */
        this.functionKeyForm.controls["caption"].setValue("OUT");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 4: /** Swipe-and-go w/ L3 Change */
        this.functionKeyForm.controls["caption"].setValue("Swipe-and-go w/ L3 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 5: /** L1 Change */
        this.functionKeyForm.controls["caption"].setValue("L1 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 6: /** L2 Change */
        this.functionKeyForm.controls["caption"].setValue("L2 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 7: /** L3 Change */
        this.functionKeyForm.controls["caption"].setValue("L3 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 8: /** L1, L2 Change */
        this.functionKeyForm.controls["caption"].setValue("L1, L2 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].enable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 9: /** L1, L3 Change */
        this.functionKeyForm.controls["caption"].setValue("L1, L3 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].enable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 10: /** L2, L3 Change */
        this.functionKeyForm.controls["caption"].setValue("L2, L3 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].enable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 11: /** L1, L2, L3 change */
        this.functionKeyForm.controls["caption"].setValue("L1, L2, L3 change");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].enable();
        this.functionKeyForm.controls["msg3"].enable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 12: /** Break Start */
        this.functionKeyForm.controls["caption"].setValue("Break Start");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 13: /** Break End */
        this.functionKeyForm.controls["caption"].setValue("Break End");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 14: /** Lunch Start */
        this.functionKeyForm.controls["caption"].setValue("Lunch Start");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 15: /** Lunch End */
        this.functionKeyForm.controls["caption"].setValue("Lunch End");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 16: /** Hour Entry */
        this.functionKeyForm.controls["caption"].setValue("Hour Entry");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].enable();
        break;
      case 17: /** Amount Entry */
        this.functionKeyForm.controls["caption"].setValue("Amount Entry");
        this.functionKeyForm.controls["msg1"].enable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].enable();
        break;
      case 18: /** View Last Punch */
        this.functionKeyForm.controls["caption"].setValue("View Last Punch");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 19: /** View Total Hours */
        this.functionKeyForm.controls["caption"].setValue("View Total Hours");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].disable();
        break;
      case 20: /** Calculated Pay Code */
        this.functionKeyForm.controls["caption"].setValue("Calculated Pay Code");
        this.functionKeyForm.controls["msg1"].disable();
        this.functionKeyForm.controls["msg2"].disable();
        this.functionKeyForm.controls["msg3"].disable();
        this.functionKeyForm.controls["PC"].enable();
        break;
    }
  }

  clearMessagesAndPayCode() {
    this.functionKeyForm.controls["msg1"].reset();
    this.functionKeyForm.controls["msg2"].reset();
    this.functionKeyForm.controls["msg3"].reset();
    this.functionKeyForm.controls["PC"].reset();
  }

  onSubmit() {
    if (this.functionKeyForm.valid) {
      this._jantekService.functionKeyUpdate(this.functionKeyForm.value);
    }
  }
}
