import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-task-det',
  templateUrl: './task-det.component.html',
  styleUrls: ['./task-det.component.css']
})
export class TaskDetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TaskDetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
