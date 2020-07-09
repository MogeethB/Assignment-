import {Observable, of} from 'rxjs';

export interface Label {
  count?: number;
  scope: string;
  name: string;
  description?: string;
  id: number;
  type?: string;
  status?: string;
}

export interface Tag {
  labelId: number;
  taskId: number
  relativeDataUrl?: string;
  baseDataUrl?: string;
  action?: string;
  id: number;
}

export interface Task {
  action: string;
  id: number;
  type: string;
  taskdataRowId: string;
  userId: string
  assignment: {
    users: string[]
  }
}

//  createDb() {
export class FakeBackendService {

  public getLabelData(): Observable<Label[]> {
    return of([
      {
        id: 1,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_left_positive',
        description: 'aneurysm_anteriocerebrol_left_positive',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 2,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_right_positive',
        description: 'aneurysm_anteriocerebrol_right_positive',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 3,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_right_positive2',
        description: 'aneurysm_anteriocerebrol_right_positive2',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 4,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_left_positive2',
        description: 'aneurysm_anteriocerebrol_left_positive2',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 5,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_left_positive2',
        description: 'aneurysm_anteriocerebrol_left_positive2',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 6,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_left_positive3',
        description: 'aneurysm_anteriocerebrol_left_positive3',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 7,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_right_positive3',
        description: 'aneurysm_anteriocerebrol_right_positive2',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 8,
        status: 'OFFICIAL',
        name: 'aneurysm_anteriocerebrol_right_positive3',
        description: 'aneurysm_anteriocerebrol_right_positive2',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 9,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_Left_position',
        description: 'artsteosis>50%_MLS_Left_position',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 10,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_Left_position1',
        description: 'artsteosis>50%_MLS_Left_position1',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 11,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_Left_position2',
        description: 'artsteosis>50%_MLS_Left_position2',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 12,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_Left_position3',
        description: 'artsteosis>50%_MLS_Left_position3',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 13,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_Left_position4',
        description: 'artsteosis>50%_MLS_Left_position4',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 14,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_right_position',
        description: 'artsteosis>50%_MLS_right_position',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 15,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_right_position1',
        description: 'artsteosis>50%_MLS_right_position1',
        type: 'Classification',
        scope: 'Image',
      },
      {
        id: 16,
        status: 'OFFICIAL',
        name: 'artsteosis>50%_MLS_right_position2',
        description: '@artsteosis>50%_MLS_right_position2',
        type: 'Classification',
        scope: 'Image',
      },
    ]);
  }

  public getTagsData(): Observable<Tag[]> {
    return of([
      {
        id: 1,
        taskId: 1,
        labelId: 5,
        action: 'AAD',
      },
      {
        id: 2,
        taskId: 1,
        labelId: 3,
        action: 'AAD',
      },
      {
        id: 3,
        taskId: 1,
        labelId: 1,
        action: 'AAD',
      },
      {
        id: 4,
        taskId: 2,
        labelId: 3,
        action: 'AAD',
      },
      {
        id: 5,
        taskId: 1,
        labelId: 2,
        action: 'AAD',
      },
      {
        id: 6,
        taskId: 4,
        labelId: 3,
        action: 'AAD',
      },
      {
        id: 7,
        taskId: 2,
        labelId: 2,
        action: 'AAD',
      },
      {
        id: 8,
        taskId: 3,
        labelId: 1,
        action: 'AAD',
      },
      {
        id: 9,
        taskId: 6,
        labelId: 5,
        action: 'AAD',
      },
      {
        id: 10,
        taskId: 7,
        labelId: 1,
        action: 'AAD',
      },
      {
        id: 11,
        taskId: 8,
        labelId: 4,
        action: 'AAD',
      },
      {
        id: 12,
        taskId: 9,
        labelId: 8,
        action: 'AAD',
      },
     
    ]);
  }

  public getTaskData() {
    return of([
      {
        id: 1,
        action: 'Created',
        taskdataRowId: '83f19ab4-06f9-442d-ad9b-ede2c6211122',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 2,
        action: 'Created',
        taskdataRowId: '83f4uab4-09f9-442d-ad9b-ede2c6211121',
        type: 'Normal',
        userId: "test1",
        assignment: {
          users: ["Mogeeth", "Ahmad", 'Mohammad']
        }
      },
      {
        id: 3,
        action: 'Created',
        taskdataRowId: '5bb19ab4-06f9-442d-ad9b-ede2c6100029',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 4,
        action: 'Created',
        taskdataRowId: '7e219ab4-06f9-442d-ad9b-ede2c63222236',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 5,
        action: 'Created',
        taskdataRowId: '1358229b4-06f9-442d-ad9b-ede2c6211121',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 6,
        action: 'Created',
        taskdataRowId: '83f19ab4-06f9-442d-ad9b-ede2c625555555',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 7,
        action: 'Created',
        taskdataRowId: '83f19ab4-06f9-442d-ad9b-ede2c626666666',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 8,
        action: 'Created',
        taskdataRowId: '83f19ab4-06f9-442d-ad9b-ede2c6277788676',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 9,
        action: 'Created',
        taskdataRowId: '83f19ab4-06f9-442d-ad9b-ede2c6200938373',
        type: 'Normal',
        userId: "test1"
      },
      {
        id: 10,
        action: 'Created',
        taskdataRowId: '83f19ab4-06f9-442d-ad9b-ede2c4488393947',
        type: 'Normal',
        userId: "test1"
      },
    ]);
  }

}
