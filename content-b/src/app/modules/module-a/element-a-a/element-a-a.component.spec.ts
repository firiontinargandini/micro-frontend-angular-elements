import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAAComponent } from './element-a-a.component';

describe('ElementAAComponent', () => {
  let component: ElementAAComponent;
  let fixture: ComponentFixture<ElementAAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementAAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
