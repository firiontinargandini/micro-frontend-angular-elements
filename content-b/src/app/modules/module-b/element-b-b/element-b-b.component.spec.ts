import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBBComponent } from './element-b-b.component';

describe('ElementBBComponent', () => {
  let component: ElementBBComponent;
  let fixture: ComponentFixture<ElementBBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementBBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
