import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBAComponent } from './element-b-a.component';

describe('ElementBAComponent', () => {
  let component: ElementBAComponent;
  let fixture: ComponentFixture<ElementBAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementBAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
