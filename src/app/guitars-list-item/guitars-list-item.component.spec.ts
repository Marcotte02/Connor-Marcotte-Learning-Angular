import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarsListItemComponent } from './guitars-list-item.component';

describe('GuitarsListItemComponent', () => {
  let component: GuitarsListItemComponent;
  let fixture: ComponentFixture<GuitarsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarsListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
