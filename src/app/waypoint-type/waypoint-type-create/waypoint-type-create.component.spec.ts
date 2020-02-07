import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointTypeCreateComponent } from './waypoint-type-create.component';

describe('WaypointTypeCreateComponent', () => {
  let component: WaypointTypeCreateComponent;
  let fixture: ComponentFixture<WaypointTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
