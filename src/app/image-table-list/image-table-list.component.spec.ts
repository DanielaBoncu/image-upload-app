import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTableListComponent } from './image-table-list.component';

describe('ImageTableListComponent', () => {
  let component: ImageTableListComponent;
  let fixture: ComponentFixture<ImageTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
