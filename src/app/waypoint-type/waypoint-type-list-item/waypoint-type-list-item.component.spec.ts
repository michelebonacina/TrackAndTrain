import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointTypeListItemComponent } from './waypoint-type-list-item.component';

describe('WaypointTypeListItemComponent', () => {
  let component: WaypointTypeListItemComponent;
  let fixture: ComponentFixture<WaypointTypeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointTypeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointTypeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
