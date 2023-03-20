import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTabelloideComponent } from './data-tabelloide.component';

describe('DataTabelloideComponent', () => {
  let component: DataTabelloideComponent;
  let fixture: ComponentFixture<DataTabelloideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTabelloideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTabelloideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
