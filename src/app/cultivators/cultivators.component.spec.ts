import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivatorsComponent } from './cultivators.component';

describe('CultivatorsComponent', () => {
  let component: CultivatorsComponent;
  let fixture: ComponentFixture<CultivatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
