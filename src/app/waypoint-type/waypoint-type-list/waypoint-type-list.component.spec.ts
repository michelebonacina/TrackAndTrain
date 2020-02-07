import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointTypeListComponent } from './waypoint-type-list.component';

describe('WaypointTypeListComponent', () => {
  let component: WaypointTypeListComponent;
  let fixture: ComponentFixture<WaypointTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
