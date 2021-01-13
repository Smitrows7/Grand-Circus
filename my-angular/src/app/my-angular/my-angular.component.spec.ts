import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngularComponent } from './my-angular.component';

describe('MyAngularComponent', () => {
  let component: MyAngularComponent;
  let fixture: ComponentFixture<MyAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
