import { Injectable } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";
import { title } from "process";
import { DialogComponent } from "src/app/components/dialog/dialog.component";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  // Toast's
  async openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Alert's
  openDialog(
    title: string,
    message: string,
    inputs = {},
    handler = (data: any) => {}
  ): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "250px",
      data: { title: title, message: message, inputs: inputs, handler: handler },
    });


    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
