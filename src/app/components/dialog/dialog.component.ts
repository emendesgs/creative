import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  @Input("data") data: any;
  resultado: any
  constructor(public dialogRef: MatDialogRef<any>) {}

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}
