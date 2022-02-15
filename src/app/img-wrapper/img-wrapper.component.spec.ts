import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWrapperComponent } from './img-wrapper.component';

describe('ImgWrapperComponent', () => {
  let component: ImgWrapperComponent;
  let fixture: ComponentFixture<ImgWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
