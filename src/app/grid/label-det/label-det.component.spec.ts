import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDetComponent } from './label-det.component';

describe('LabelDetComponent', () => {
  let component: LabelDetComponent;
  let fixture: ComponentFixture<LabelDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
