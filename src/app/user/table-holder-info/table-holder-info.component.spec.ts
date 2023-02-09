import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHolderInfoComponent } from './table-holder-info.component';

describe('TableHolderInfoComponent', () => {
  let component: TableHolderInfoComponent;
  let fixture: ComponentFixture<TableHolderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHolderInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHolderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
