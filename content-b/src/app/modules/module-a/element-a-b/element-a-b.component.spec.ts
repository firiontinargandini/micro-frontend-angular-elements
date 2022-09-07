import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementABComponent } from './element-a-b.component';

describe('ElementABComponent', () => {
  let component: ElementABComponent;
  let fixture: ComponentFixture<ElementABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
