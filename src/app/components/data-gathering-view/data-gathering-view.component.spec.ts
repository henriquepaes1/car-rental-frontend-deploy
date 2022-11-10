import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGatheringViewComponent } from './data-gathering-view.component';

describe('DataGatheringViewComponent', () => {
  let component: DataGatheringViewComponent;
  let fixture: ComponentFixture<DataGatheringViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGatheringViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGatheringViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
