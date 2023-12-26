import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-function-key',
  templateUrl: './function-key.component.html',
  styleUrl: './function-key.component.css'
})
export class FunctionKeyComponent implements OnInit{

  @Input() functionKeyNumber: number = 0;

  functionKeyForm = new FormGroup({
    functionKeyNumber: new FormControl(0, Validators.required),
    FKType: new FormControl("1", Validators.required),
    functionKeyCaption: new FormControl("None", Validators.required),
    message1: new FormControl({value: "", disabled: true}, [Validators.required]),
    message2: new FormControl({value: "", disabled: true}, [Validators.required]),
    message3: new FormControl({value: "", disabled: true}, [Validators.required]),
    payCode: new FormControl({value: "", disabled: true}, [Validators.required]),
  });

  constructor(
    private _jantekService: JantekService,
  ) {}

  ngOnInit(): void {
    this.functionKeyForm.controls["functionKeyNumber"].setValue(this.functionKeyNumber);
  }

  typeChanged(event: any) {
    this.clearMessagesAndPayCode();
    switch(event) {
      case "0": /** None */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("None");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "1": /** None */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("None");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "2": /** In */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("IN");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "3": /** Out */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("OUT");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "4": /** Swipe-and-go w/ L3 Change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Swipe-and-go w/ L3 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "5": /** L1 Change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("L1 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "6": /** L2 Change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("L2 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "7": /** L3 Change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("L3 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "8": /** L1, L2 Change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("L1, L2 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].enable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "9": /** L1, L3 Change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("L1, L3 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].enable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "10": /** L2, L3 Change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("L2, L3 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].enable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "11": /** L1, L2, L3 change */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("L1, L2, L3 change");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].enable();
        this.functionKeyForm.controls["message3"].enable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "12": /** Break Start */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Break Start");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "13": /** Break End */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Break End");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "14": /** Lunch Start */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Lunch Start");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "15": /** Lunch End */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Lunch End");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "16": /** Hour Entry */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Hour Entry");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].enable();
        break;
      case "17": /** Amount Entry */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Amount Entry");
        this.functionKeyForm.controls["message1"].enable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].enable();
        break;
      case "18": /** View Last Punch */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("View Last Punch");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "19": /** View Total Hours */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("View Total Hours");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].disable();
        break;
      case "20": /** Calculated Pay Code */
        this.functionKeyForm.controls["functionKeyCaption"].setValue("Calculated Pay Code");
        this.functionKeyForm.controls["message1"].disable();
        this.functionKeyForm.controls["message2"].disable();
        this.functionKeyForm.controls["message3"].disable();
        this.functionKeyForm.controls["payCode"].enable();
        break;
    }
  }

  clearMessagesAndPayCode() {
    this.functionKeyForm.controls["message1"].setValue("");
    this.functionKeyForm.controls["message2"].setValue("");
    this.functionKeyForm.controls["message3"].setValue("");
    this.functionKeyForm.controls["payCode"].setValue("");
  }

  onSubmit() {
    if (this.functionKeyForm.valid) {
      this._jantekService.functionKeyUpdate(this.functionKeyForm.value);
    }
  }
}
