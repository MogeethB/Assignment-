import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FakeBackendService} from './services/fake-backend-service.service';
import {AppComponent} from './app.component';
import {AppService} from './services/app-service.service';
import {LabelComponent} from './grid/labels/label.component';
import {AppPaginationComponent} from './grid/app-pagination/app-pagination.component';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import { LabelDetComponent } from './grid/label-det/label-det.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { TaskDetComponent } from './grid/task-det/task-det.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    AppPaginationComponent,
    LabelDetComponent,
    TaskDetComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    // InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [AppService, FakeBackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
