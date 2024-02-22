import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PayCode } from '../../../models/pay-code';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-pay-code-dialog',
  templateUrl: './pay-code-dialog.component.html',
  styleUrl: './pay-code-dialog.component.css'
})
export class PayCodeDialogComponent implements OnInit{

  payCodeSelected: number = 0;
  payCodeList: PayCode[] = [];

  constructor(
    private _jantekService: JantekService,
    private _dialogRef: MatDialogRef<PayCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    /** data injected gives "fktype" and "currentPayCode" currently selected */
    // Load list of pay codes into payCodeList
    this._jantekService.getPayCodes(this.data.fktype).subscribe(
      data => {
        for(var index = 0; index<data["list"].length; index++) {
          let newPayCode = new PayCode(data["list"][index][0], data["list"][index][1]);
          this.payCodeList.push(newPayCode);
        }
      }
    );
  }

  /** Dialog selection */
  onPayCodeDialogChange(event:any) {
    console.log(event[0]);
  }

  /** Send selected pay code data to function-key */
  savePayCodeDialog(): void {
    this._dialogRef.close(this.payCodeSelected);
  }

  /** Close dialog */
  closePayCodeDialog(): void {
    this._dialogRef.close();
  }
}