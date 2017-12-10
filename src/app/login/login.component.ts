import { Component, OnInit } from '@angular/core';
// MatDialogRef gives access to the dialog response
import { MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // for the binding from the component form
  user = {remember: false};

  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`User:`, this.user);
    this.dialogRef.close();
  }
}
