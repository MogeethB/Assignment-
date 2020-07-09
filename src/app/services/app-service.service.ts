import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {map, switchMap} from 'rxjs/operators';
import {FakeBackendService, Label} from './fake-backend-service.service';
import {SortDirection} from "@angular/material/sort";
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  constructor(
    private http: Http,
    private fakeBackendService: FakeBackendService
  ) {}

  getLabels(
    search: string,
    direction: SortDirection,
    pageIndex: number,
    pageSize: number
  ): Observable<{ total_count: number; items: Label[] }> {
    return this.fakeBackendService.getLabelData().pipe(
      switchMap((labels) => {
        // this to get count of tasks for each label
        return this.fakeBackendService.getTagsData().pipe(
          map((tags) => {
            labels.forEach((l) => {
              const tasks = tags
                .filter((c) => c.labelId == l.id)
                .map((c) => c.taskId);

              // this to ignore duplicate tasks
              const result = [];
              const map = new Map();
              for (const item of tasks) {
                if (!map.has(item)) {
                  map.set(item, true);
                  result.push(item);
                }
              }

              l.count = result.length;
            });
            return labels;
          })
        );
      }),
      // use custome search, sort , pagination
      map((c) => {
        if (direction) {
          if (direction == 'asc') {
            c = c.sort((a, b) => (a.name > b.name ? 1 : -1));
          } else {
            c = c.sort((a, b) => (a.name < b.name ? 1 : -1));
          }
        }

        if (search) {
          c = c.filter((l) => l.name.search(search) >= 0);
        }

        if (!pageIndex) {
          pageIndex = 0;
          pageSize = 10;
        }

        const total = c.length;

        c = c.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);

        return { items: c, total_count: total };
      })
    );
  }

  getTasks(labelId) {
    // this to filter tasks on label id
    return this.fakeBackendService.getTagsData().pipe(
      map((c) => c.filter((c) => c.labelId === labelId)),
      switchMap((tags) => {
        return this.fakeBackendService.getTaskData().pipe(
          map((tasks) => {
            return tasks.filter(
              (t) => tags.findIndex((tag) => tag.taskId === t.id) >= 0
            );
          })
        );
      })
    );
  }
}
