import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AppService } from '../../services/app-service.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetComponent } from '../task-det/task-det.component';
import { Label } from '../../services/fake-backend-service.service';

@Component({
  selector: 'app-label-det',
  templateUrl: './label-det.component.html',
  styleUrls: ['./label-det.component.css'],
})
export class LabelDetComponent implements OnInit, OnChanges {
  @Input() label: Label;

  displayedColumns: string[] = ['action', 'taggers'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private appservice: AppService, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openTask(row: any) {
    this.matDialog.open(TaskDetComponent, {
      data: row,
    });
  }

  getAllTasks() {
    this.appservice.getTasks(this.label.id).subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.label.currentValue) {
      this.getAllTasks();
    }
  }
}
