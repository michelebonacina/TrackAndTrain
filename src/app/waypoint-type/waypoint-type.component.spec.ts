import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointTypeComponent } from './waypoint-type.component';

describe('WaypointTypeComponent', () => {
  let component: WaypointTypeComponent;
  let fixture: ComponentFixture<WaypointTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
